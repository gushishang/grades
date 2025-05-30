import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path:"/test",
    name:"test",
    component: () => import("../views/Students.vue")
  },
  {
    path:"/compare",
    name:"compare",
    component: () => import("../views/Compare.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router