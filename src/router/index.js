import Vue from 'vue'
import VueRouter from 'vue-router'
import fastClick from 'fastclick'
import HomePage from '@/pages/home/Home.vue'


Vue.use(VueRouter)
fastClick.attach(document.body)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
