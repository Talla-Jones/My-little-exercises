<template>
  <div v-if="isVisible" class="flex border z-40 border-y-0 bg-white absolute lg:static shadow-2xl lg:shadow-none flex-col top-0 left-0 w-[255px] h-full">
    <div class=" flex py-4 px-1 border space-x-3 items-center border-x-0 border-t-0 text-xl font-bold justify-end">
      <p>Innovators Sphere</p>
      <div @click="isVisible=false" class="flex rounded-md mt-1 h-10 w-10 hover:bg-color1 hover:text-white items-center justify-center">
        <svg class="mr-[-8px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M9 6l-6 6 6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class=" w-full flex-1 flex-col p-6">
      <div @click="$router.push('/dashboard')" :class="[$route.path === '/dashboard' ? 'bg-color1 text-white' : 'bg-white text-black']"  class="flex hover:bg-color1 hover:text-white cursor-pointer px-2 py-[6px] items-center space-x-4 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Top row -->
          <rect x="3" y="3" width="8" height="8" rx="1"/>
          <rect x="13" y="3" width="8" height="8" rx="1"/>
          
          <!-- Bottom row -->
          <rect x="3" y="13" width="8" height="8" rx="1"/>
          <rect x="13" y="13" width="8" height="8" rx="1"/>
        </svg>
        <span>Dashboard</span>
      </div>
      <hr class="my-3">
      <div  @click="$router.push('/messages')" :class="[$route.path === '/messages' ? 'bg-color1 text-white' : 'bg-white text-black']"  class="flex hover:bg-color1 hover:text-white cursor-pointer px-2 py-[6px] items-center space-x-4 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="20" height="20" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
          <path d="M3 7l9 6 9-6"/>
        </svg>
        <span>Messages</span>
      </div>
      <hr class="my-3">
      <div @click="$router.push('/notifications')" :class="[$route.path === '/notifications' ? 'bg-color1 text-white' : 'bg-white text-black']" class="flex hover:bg-color1 hover:text-white cursor-pointer px-1 py-[6px] items-center space-x-4 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Bell body -->
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
          <!-- Clapper -->
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <span>Notifications</span>
      </div>
      <hr class="my-3">
      <div @click="$router.push('/profile')" :class="[$route.path === '/profile' ? 'bg-color1 text-white' : 'bg-white text-black']" class="flex hover:bg-color1 hover:text-white cursor-pointer px-1 py-[6px] items-center space-x-4 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <!-- Head -->
          <circle cx="32" cy="20" r="12"/>
          <!-- Shoulders / body -->
          <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16H16z"/>
        </svg>
        <span >Profile</span>
      </div>
      <hr class="my-3">
      <div @click="$router.push('/posts')" :class="[$route.path === '/posts' ? 'bg-color1 text-white' : 'bg-white text-black']" class="flex hover:bg-color1 hover:text-white cursor-pointer px-2 py-[6px] items-center space-x-4 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <title>Post</title>
          <rect x="2.5" y="3" width="19" height="18" rx="1.5"/>
          <!-- thumbnail -->
          <rect x="4.5" y="5" width="5" height="5" rx="0.75"/>
          <!-- lines of text -->
          <path d="M11.5 6.5h7"/>
          <path d="M4.5 11.5h14"/>
          <path d="M4.5 14.5h10"/>
          <path d="M4.5 17.5h8"/>
        </svg>
        <span >Posts</span>
      </div>
      <hr class="my-3">
      <div @click="$router.push('/hods')" :class="[$route.path === '/hods' ? 'bg-color1 text-white' : 'bg-white text-black']" class="flex hover:bg-color1 hover:text-white cursor-pointer px-1 py-[6px] items-center space-x-4 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <!-- Head -->
          <circle cx="32" cy="20" r="12"/>
          <!-- Shoulders / body -->
          <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16H16z"/>
        </svg>
        <span >HODs</span>
      </div>
      <hr class="my-3">
      <div @click="$router.push('/communities')" :class="[$route.path === '/communities' ? 'bg-color1 text-white' : 'bg-white text-black']" class="flex hover:bg-color1 hover:text-white cursor-pointer px-1 py-[6px] items-center space-x-4 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <!-- Center user (front) -->
          <circle cx="32" cy="20" r="8"/>
          <path d="M20 46c0-6.627 5.373-12 12-12s12 5.373 12 12H20z"/>
          
          <!-- Left user (behind) -->
          <circle cx="16" cy="24" r="6"/>
          <path d="M8 46c0-5.523 4.477-10 10-10"/>

          <!-- Right user (behind) -->
          <circle cx="48" cy="24" r="6"/>
          <path d="M46 36c5.523 0 10 4.477 10 10"/>
        </svg>

        <span >Communities</span>
      </div>
      <hr class="my-3">
    </div>
  </div>
  <div v-else @click="isVisible=true" class="flex p-1 absolute w-[60px] h-[75px] border border-x-0 border-t-0 items-center justify-center cursor-pointer bg-white hover:bg-color1 hover:text-white">
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <rect x="3" y="4" width="18" height="2" rx="1"/>
      <rect x="3" y="11" width="18" height="2" rx="1"/>
      <rect x="3" y="18" width="18" height="2" rx="1"/>
    </svg>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'

const route = useRouter()

import { ref, onMounted } from "vue"

export default {
  name: "Sidebar",
  setup() {
    const isVisible = ref(false)
    // Set default visibility based on screen size
    const checkScreen = () => {
      if (window.innerWidth >= 1024) {
        isVisible.value = true
      } else {
        isVisible.value = false
      }
    }

    const toggleSidebar = () => {
      isVisible.value = !isVisible.value
    }

    onMounted(() => {
      checkScreen()
      window.addEventListener("resize", checkScreen)
    })

    return { isVisible, toggleSidebar }
  }
}
</script>