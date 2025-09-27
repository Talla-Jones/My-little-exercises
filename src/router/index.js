import {createRouter, createWebHistory} from 'vue-router'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Dashboard from '../views/dashboard.vue'
import Message from '../views/message.vue'

const routes = [
  {path: '/register', component: Register},
  {path: '/', component: Login},
  {path: '/dashboard', component: Dashboard},
  {path: '/messages', component: Message}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router