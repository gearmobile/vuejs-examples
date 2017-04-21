import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home.vue'
import About from '../components/about.vue'
import Add from '../components/add.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/add', component: Add, name: 'Add' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
