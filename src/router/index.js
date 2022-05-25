import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/home/Home.vue'
import CityPage from '@/pages/city/City.vue'
import DetailPage from '@/pages/detail/Detail'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },{
    path: '/city',
    name: 'City',
    component: CityPage
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
