import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HalamanMakanan from '../views/HalamanMakanan.vue'
import HalamanMinuman from '../views/HalamanMinuman.vue'
import HalamanSnack from '../views/HalamanSnack.vue'
import HalamanCheckOut from '../views/HalamanCheckOut.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/makanan',
    name: 'makanan',
    component: HalamanMakanan
  },
  {
    path: '/minuman',
    name: 'minuman',
    component: HalamanMinuman
  },
  {
    path: '/snack',
    name: 'snack',
    component: HalamanSnack
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: HalamanCheckOut
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
