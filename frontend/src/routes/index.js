import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login'
import Home from '../views/Home/Home'

const routes = [
  { 
    path: '/',
    name:'login', 
    component: Login
  },
  { 
    path: '/home',
    name:'home', 
    component: Home
  },
  { 
    path: '/products',
    name:'products', 
    component: Home
  },
  { 
    path: '/sales',
    name:'sales', 
    component: Home
  },
  { 
    path: '/reports',
    name:'reports', 
    component: Home
  }
  
]
  

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router