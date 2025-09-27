<template>
  <div class="flex flex-col">
    <div v-for="(msg, index) in messages" :key="index" class="flex p-3 border mb-4 rounded-md break-words">
      <strong>{{ msg.user }}:</strong> {{ msg.text }}
    </div>
    <input v-model="message" @keyup.enter="sendMessage" class="border w-64 h-10 px-2 rounded-md" placeholder="Enter a message..." type="text">
    <button @click="sendMessage" class="border-none mt-3 bg-black text-white py-1 ">Send</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { io } from 'socket.io-client';

const username = prompt("Enter your username"); // Talla / Alice / etc
const recipient = prompt("Enter recipient username"); // the other tab's username

const socket = io("http://localhost:3000");

const messages = ref([]);
const message = ref('');

// Register user on server
socket.emit("register", username);

onMounted(() => {
  // Listen for private messages
  socket.on("privateMessage", (msg) => {
    messages.value.push(msg);
  });
});

onUnmounted(() => {
  socket.off("privateMessage");
});

function sendMessage() {
  if (message.value.trim() !== "") {
    socket.emit("chatMessage", {
      from: username,
      to: recipient,
      text: message.value
    });
    message.value = "";
  }
}
</script>
