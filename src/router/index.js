import {createRouter, createWebHistory} from 'vue-router'
import Message from '../views/message.vue'

const routes = [
  {path: '/', component: Message}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router