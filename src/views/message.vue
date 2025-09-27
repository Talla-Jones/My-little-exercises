<template>
  <div class="flex fixed top-0 left-0 items-start h-full w-full ">
    <div class="flex w-full h-full">
      <Sidebar />
      <div class="flex flex-1 flex-col items-center justify-start">
        <Topbar />
        <div class="flex w-full text-2xl font-bold justify-start px-4 text-color1">Messages</div>
        <div class="sm:px-7 md:py-4 py-1 flex flex-col lg:flex-row flex-1 w-full ">
          <div v-if="isvisible" class="flex border-none lg:border lg:border-y-0 lg:border-l-0 flex-col lg:w-[490px]  w-full h-full p-4 overflow-y-auto">
            <div @click="isvisible = false, isvisible1 = true" class="flex pr-4 border-y-0 border-l-0 h-full space-x-4 w-full items-start">
              <div class="h-10 w-10 items-center justify-center flex bg-gray-100 rounded-full font-bold">JC</div>
              <div class="flex text-start relative flex-1 flex-col">
                <p class="text-black font-medium">John Codemon</p>
                  <p class="text-[14px] line-clamp-1 pr-8">
                    {{ messages.length ? messages[messages.length - 1].content : '' }}
                  </p>
                <div class="flex absolute bg-teal-500 text-white text-[12px] h-5 w-5 items-center justify-center right-3 rounded-full top-0">
                  {{ messages.length }}
                </div>
              </div>
            </div>
          </div>
          <div v-if="isvisible1" class="lg:border lag:border-x-0 rounded-md bg-gray-50 lg:border-b-0 overflow-y-auto gap-y-4 flex flex-1 flex-col p-4">
            <div class="flex w-full justify-center text-[12px] text-black font-semibold">
              <div class="flex p-1 rounded-md bg-slate-50 shadow-sm shadow-gray-700">{{ timeAgo(messages[0]?.created_at) }}</div>
            </div>
            <div @click="isvisible = true, isvisible1 = false" v-if="isvisible1" class="flex absolute p-2 items-center justify-center rounded-md hover:text-white hover:bg-teal-500 right-7 top-[75px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </div>
            <div v-for="msg in messages" :key="msg.message_id"
                class="flex w-full mb-2"
                :class="msg.sender_id === myUserId ? 'justify-end' : 'justify-start'">
              
              <div :class="msg.sender_id === myUserId ? 'bg-teal-500 text-white' : 'bg-gray-200 text-black'"
                  class="relative pb-7 flex flex-col rounded-md p-2 max-w-[450px] min-w-[50px] w-fit">
                
                <p class="text-start">{{ msg.content }}</p>
                <p class="text-[12px] absolute bottom-1 right-3">{{ new Date(msg.created_at).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true}) }}</p>
              </div>

            </div>


            <!-- Input -->
            <div class="flex mt-auto pt-2">
              <input v-model="newMessage" type="text" class="flex-1 border rounded-md p-2" placeholder="Type a message..."/>
              <button @click="sendMessage" class="ml-2 bg-teal-500 text-white px-4 rounded-md">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/navbar.vue';
import Topbar from '../components/topbar.vue';
import { onMounted, ref } from 'vue';
import { io } from "socket.io-client";

export default {
  components: {
    Sidebar,
    Topbar
  },
  setup() {
    const isvisible = ref(false);
    const isvisible1 = ref(true);

    // Chat state
    const messages = ref([]);           // all messages in current conversation
    const newMessage = ref('');         // new message input
    const myUserId = 1;                 // your logged-in user id
    const selectedUserId = 2;           // the user you are chatting with

    let socket;

    const checkScreen = () => {
      if (window.innerWidth >= 1024) {
        isvisible.value = true;
        isvisible1.value = true;
      } else {
        isvisible.value = true;
        isvisible1.value = false;
      }
    };

    const sendMessage = () => {
      if (!newMessage.value.trim()) return;

      const msgData = {
        sender_id: myUserId,
        receiver_id: selectedUserId,
        content: newMessage.value
      };

      // Send via Socket.IO
      socket.emit("sendMessage", msgData);

      // Optimistically add to local messages
      messages.value.push({
        ...msgData,
        created_at: new Date(),
        message_id: Date.now()  // temporary ID until server responds
      });

      newMessage.value = '';
    };

    // 🔹 Format "x mins ago" / "Yesterday"
    function timeAgo(date) {
      const now = new Date();
      const seconds = Math.floor((now - new Date(date)) / 1000);

      const intervals = {
        year: 31536000,
        month: 2592000,
        day: 86400,
        hour: 3600,
        minute: 60
      };

      if (seconds < 60) return "Just now";

      for (const [unit, value] of Object.entries(intervals)) {
        const count = Math.floor(seconds / value);
        if (count >= 1) {
          return count === 1 ? `1 ${unit} ago` : `${count} ${unit}s ago`;
        }
      }
    }

    onMounted(() => {
      checkScreen();
      window.addEventListener("resize", checkScreen);

      // Connect to Socket.IO server
      socket = io("http://localhost:3000");  // adjust URL if needed

      // Join your private room
      socket.emit("join", myUserId);

      // Listen for incoming messages
      socket.on("receiveMessage", (msg) => {
        if (msg.sender_id === selectedUserId) {
          messages.value.push(msg);

          // Update last message in conversations
          const conv = conversations.value.find(c => c.user_id === msg.sender_id);
          if (conv) {
            conv.last_message = msg.content;
            conv.unread_count += 1;  // increment unread
          } else {
            // optional: add new conversation if not exists
            conversations.value.push({
              user_id: msg.sender_id,
              full_name: "New User",
              initials: "NU",
              last_message: msg.content,
              unread_count: 1
            });
          }
        }
      });

      // Listen for patched messages
      socket.on("messagePatched", (msg) => {
        const index = messages.value.findIndex(m => m.message_id === msg.message_id);
        if (index !== -1) {
          messages.value[index].content = msg.content;
        }
      });
    });

    return { isvisible, isvisible1, messages, newMessage, sendMessage, timeAgo, myUserId };
  }
}
</script>

