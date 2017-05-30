import Vue from 'vue'
import Router from 'vue-router'
//
import Home from '@/components/home'
import Dashboard from '@/components/dashboard'
import Signin from '@/components/signin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})
