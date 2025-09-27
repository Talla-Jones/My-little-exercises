<template>
 <div class="flex top-0 left-0 fixed items-center w-full h-full justify-start flex-col">
  <topbar />
  <div class=" flex flex-1 justify-center items-center bg-gray-50 p-6 w-full">
    <form @submit.prevent class="flex max-w-[480px] w-full border bg-white px-4 py-6 rounded-md flex-col" action="submit">
      <div class="text-color1 font-bold text-[18px] mb-[50px]">Welcome back to the Innovators Community. Please fill in your credentials before we go</div>
      <div class="flex w-full flex-col items-start mb-3">
        <label class="text-[14px] text-black font-semibold" for="name">Email</label>
        <input v-model="credentials.email" required placeholder="Enter Your Email Here" class="placeholder:text-sm border-gray-400 rounded-md h-9 w-full border px-3" type="email">
        <p v-show="outcomes.isvisible" class="text-[red]">No user found with this email</p>
      </div>
      <div class="flex w-full flex-col items-start mb-[40px]">
        <label class="text-[14px] text-black font-semibold" for="name">Password</label>
        <input v-model="credentials.password" required placeholder="Create a Password" class="placeholder:text-sm border-gray-400 rounded-md h-9 w-full border px-3" type="text">
        <p v-show="outcomes.isvisible1" class="text-[red]">Invalid password</p>
      </div>
      <button @click="fetchUser" class="flex border-none bg-pink-700 h-9 hover:border-none hover:bg-pink-600 text-white items-center justify-center">Login</button>
      <div class="flex mt-2 w-full justify-end text-sm px-2">Don't have an account? <a class="px-1 hover:text-black text-pink-600" href="/register">Register</a></div>
      <ul class=" flex justify-center items-start flex-col bg-gray-100 text-black p-4 rounded-md mt-7">
        <li class="font-semibold mb-3">Demo Accounts</li>
        <li class="text-[12px]">Email: example@gmail.com, Password: 12345678</li>
        <li class="text-[12px]">Email: johndoe@gmail.com, Password: hisPassword123</li>
      </ul>
    </form>
  </div>
 </div>
</template>

<script>
import router from '../router/index'
import topbar from '../components/Ltopbar.vue'
export default{
  components:{topbar},
  data(){
    return {
      outcomes:{isvisible: false, isvisible1: false},
      credentials:{email:'', password: ''}
    }
  },
  methods: {
    async fetchUser(){
      try {
        const res = await fetch('http://localhost:3000/users/login', {
          method: "POST",
          headers: {"Content-Type":"application/json"},
          body: JSON.stringify({email:this.credentials.email, password:this.credentials.password})
        })
        const response = await res
        const data = await res.json()
        console.log(response);
        console.log(data);

        this.handleLogin(response, data)
        
      } catch (error) {
        console.error(error);
      }
    },
    handleLogin(response, data){
      if(response.ok){
        this.$router.push('/dashboard')
      }
      if (data.message === 'Invalid password'){
        this.outcomes.isvisible1 = true;
      }else{
        this.outcomes.isvisible1 = false; 
      }
      if(response.status === 404){
        this.outcomes.isvisible = true;
      }else{
        this.outcomes.isvisible = false; 
      }
    }
  }
}

</script>