<template>
  <div class="flex h-full fixed flex-col  justify-start items-center w-full top-0 left-0">
    <topbar />
    <div class=" bg-gray-50 w-full overflow-y-scroll flex flex-1 justify-center items-center px-6">
      <form @submit.prevent class="flex max-w-[480px] bg-white w-full px-4 py-6 rounded-md border flex-col justify-center" action="submit">
        <div class="font-bold mb-[20px] text-[18px] text-color1">Fill in your info to join the Innovators Community</div>
        <div class="flex w-full flex-col items-start mb-3">
          <label class="text-[14px] text-black font-semibold" for="name">Full Name</label>
          <input v-model="user.name" required placeholder="Enter Your Full Name Here" class="placeholder:text-sm border-gray-400 rounded-md h-9 w-full border px-3" type="text">
        </div>
        <div class="flex w-full flex-col items-start mb-3">
          <label class="text-[14px] text-black font-semibold" for="name">Email</label>
          <input v-model="user.email" required placeholder="Enter Your Email Here" class="placeholder:text-sm border-gray-400 rounded-md h-9 w-full border px-3" type="email">
        </div>
        <div class="flex w-full flex-col items-start mb-3">
          <label class="text-[14px] text-black font-semibold" for="name">Password</label>
          <input v-model="password.password1" required placeholder="Create a Password" class="placeholder:text-sm border-gray-400 rounded-md h-9 w-full border px-3" type="text">
          <p v-if="password.outcomes.isvible" class="text-[red] text-[12px]">Password must be 8 characters or above</p>
          <p v-if="password.outcomes.isvible1" class="text-[red] text-[12px]">Passwords don't match</p>
        </div>
        <div class="flex w-full flex-col items-start mb-3">
          <label class="text-[14px] text-black font-semibold" for="name">Confirm Password</label>
          <input v-model="password.password2" required placeholder="Confirm Your Password" class="placeholder:text-sm border-gray-400 rounded-md h-9 w-full border px-3" type="text">
        </div>
        <div class="flex w-full flex-col items-start mb-3">
          <label class="text-[14px] text-black font-semibold" for="name">Link to Portfolio</label>
          <input v-model="user.portfolio" required placeholder="Enter the Link to Your Portfolio Website" class="placeholder:text-sm border-gray-400 rounded-md h-9 w-full border px-3" type="text">
        </div> 
        <div class="flex w-full flex-col items-start mb-5">
          <label class="text-[14px] text-black font-semibold" for="name">Resume</label>
          <input v-model="user.resume" required placeholder="Link to Resume" class="placeholder:text-sm border-gray-400 rounded-md h-9 w-full border px-3" type="text">
        </div>
        <button @click="handleRegistration" class="flex border-none bg-pink-700 h-9 hover:border-none hover:bg-pink-600 text-white items-center justify-center">Register</button>
        <div class="flex mt-2 w-full justify-end text-sm px-2">Already have an account? <a class="px-1 hover:text-black text-pink-600" href="/">Login</a></div>
      </form>
    </div>
  </div>
</template>
<script>

import topbar from '../components/Ltopbar.vue'

export default {
  components: {topbar},
  data(){
    return {
      password: {password1:'', password2:'', 
        outcomes:{isvible:false, isvible1:false}
      },
      user: {
        name: '',
        email: '',
        password: '',
        portfolio: '',
        resume: ''
      }
    }
  },
  methods: {
    async handleRegistration(){
      try {
        this.checkPasswordProps();
        const res = await fetch('http://localhost:3000/users/register', {
          method: "POST",
          headers:{"Content-Type" : "application/json"},
          body: JSON.stringify({username:this.user.name, email:this.user.email, password: this.user.password, portfolio:this.user.portfolio, resume:this.user.resume})
        })
        const data = await res.json()
        console.log(data);
      } catch (error) {
        console.error(error);
        
      }
    },
    checkPasswordProps(){
      if(this.password.password1.length < 8){
        this.password.outcomes.isvible = true
      }else{
        this.password.outcomes.isvible = false
      }
      if(this.password.password1 !== this.password.password2){
        this.password.outcomes.isvible1 = true
      }else{
        this.password.outcomes.isvible1 = false
      }
      this.user.password = this.password.password1
    }
  }

}

</script>