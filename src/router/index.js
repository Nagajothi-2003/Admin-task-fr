import { createRouter, createWebHistory } from 'vue-router'

import Loginin from '../views/Login.vue'
import Admin from'../views/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Loginin',
      component: Loginin
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
   
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
