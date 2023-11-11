import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardingView from '../views/BoardingView.vue'
import LoginView from '../views/LoginView.vue'
import HomePageView from '../views/HomePageView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/boarding',
      name: 'boarding',
      component: BoardingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView 
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePageView 
    },
    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: ForgotPasswordView 
    }
  ]
})

export default router
