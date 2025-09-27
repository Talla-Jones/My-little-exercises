<template>
  <div class="flex fixed top-0 left-0 items-start h-full w-full ">
    <div class="flex w-full h-full">
      <Sidebar />
      <div class="flex flex-1 bg-gray-50 flex-col items-center justify-start">
        <Topbar />
        <div class="sm:px-7 md:py-4 py-1 flex flex-col overflow-y-scroll flex-1 w-full ">
          <div class="grid gap-1 sm:gap-3 grid-cols-1 md:grid-cols-2 ">
            <div class="flex bg-white flex-col w-full border p-4 md:rounded-md">
              <div class="flex w-full items-center space-x-3 text-color1">
                <div class="flex bg-gray-100 text-[13px] h-10 w-10 rounded-md items-center font-bold justify-center">
                  MAD
                </div>
                <p class="font-bold ">Mobile App Development</p>
              </div>
              <div class=" px-2 flex justify-between items-center">
                <div class="flex items-center space-x-1 justify-center">
                  <div class="flex justify-center items-center bg-gray-200 h-8 w-8 rounded-full text-black font-bold">DH</div>
                  <div class="flex px-2 flex-col items-start">
                    <p class="text-black font-semibold">Doh Landrine <span class="text-blue-700">HOD</span></p>
                    <p class=" text-[15px] text-gray-500">65d ago</p>
                  </div>
                </div>
                <div class="flex font-bold">...</div>
              </div>
              <p class="text-left my-3 text-[15px]">
                Internships at Sphere officially open tommorow
              </p>
              <hr>
              <div class="flex w-full">
                <img class="object-contain" src="../My Icons/ChatGPT Image Sep 23, 2025, 07_20_37 PM.png" alt="">
              </div>
              <hr>
              <div class="flex justify-start items-center w-full mt-2">
                <div class=" flex pr-2">
                  <div class="h-8 w-8 flex items-center justify-center font-bold text-black rounded-full bg-gray-200">JC</div>
                </div>
                <input placeholder="Ask a question.." class="h-8 px-4 flex flex-1 rounded-md border placeholder:text-[15px]" type="text">
              </div>
              <div class="flex mt-4 space-x-6 items-center w-full justify-between">
                <button class="flex items-center justify-center py-2 rounded-md bg-color1 flex-1 text-white hover:bg-[#008060] hover:border-none focus:border-none active:border-none border-none">
                  <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <!-- Paper plane -->
                    <path d="M22 2L11 13"/>
                    <path d="M22 2L15 22l-4-9-9-4L22 2z"/>
                  </svg>
                  Message
                </button>
                <button class="flex items-center justify-center py-2 rounded-md bg-blue-500 flex-1 text-white hover:bg-blue-800 hover:border-none focus:border-none active:border-none border-none">
                  <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <!-- Document -->
                    <rect x="4" y="2" width="16" height="20" rx="2"/>
                    <path d="M8 6h8"/>
                    <path d="M8 10h5"/>
                    
                    <!-- Arrow pointing into document (apply) -->
                    <path d="M12 18v-4"/>
                    <path d="M9 15l3 3 3-3"/>
                  </svg>
                  Apply
                </button>
                <button class="flex items-center justify-center py-2 rounded-md bg-black flex-1 text-white hover:bg-gray-800 hover:border-none focus:border-none active:border-none border-none">
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  

                  <path d="M8.59 13.51l6.83 3.98"/>
                  <path d="M15.42 6.51L8.59 10.49"/>
                </svg>
                  Share
                </button>
              </div>
              <div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from '../components/navbar.vue'
import Topbar from '../components/topbar.vue';


export default {
  components: {Sidebar, Topbar},
  data(){
    return {
      isvisible:false,
      isvisible1:true
    }
  }
}

</script>