<template>
  <div class="flex border h-[75px] bg-white justify-center border-x-0 border-t-0 w-full">
    <div class=" flex justify-between w-full md:max-w-[800px]  items-center ml-[60px]  px-[50px]">
      <div @click="$router.push('/posts')" class="flex relative hover:bg-color1 hover:text-white p-2 rounded-md">
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
        <div class="flex absolute rounded-full text-[12px] h-5 w-5 top-[-7px] right-[-7px] bg-red-600 text-white items-center justify-center">10</div>
      </div>
      <div @click="$router.push('/profile')" class="flex hover:bg-color1 hover:text-white p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="25" height="25" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <!-- Head -->
          <circle cx="32" cy="20" r="12"/>
          <!-- Shoulders / body -->
            <path d="M16 52c0-8.837 7.163-16 16-16s16 7.163 16 16H16z"/>
          </svg>
      </div>
      <div @click="$router.push('/messages')" class="flex relative hover:bg-color1 hover:text-white p-2 rounded-md">
        <svg class="h-6" xmlns="http://www.w3.org/2000/svg" 
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
        <div class="flex absolute rounded-full text-[12px] h-5 w-5 top-[-7px] right-[-7px] bg-red-600 text-white items-center justify-center">1</div>
      </div>
      <div @click="$router.push('/people')" class="flex relative hover:bg-color1 hover:text-white p-2 rounded-md">
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
        <div class="flex absolute rounded-full text-[12px] h-5 w-5 top-[-7px] right-[-7px] bg-red-600 text-white items-center justify-center">6</div>
      </div>
      <div @click="$router.push('/notifications')" class="flex relative hover:bg-color1 hover:text-white p-2 rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <!-- Bell body -->
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/>
          <!-- Clapper -->
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <div class="flex absolute rounded-full text-[12px] h-5 w-5 top-[-7px] right-[-7px] bg-red-600 text-white items-center justify-center">7</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Topbar'
}

</script>