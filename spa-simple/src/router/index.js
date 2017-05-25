import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Brands from '@/components/brands'
import Contacts from '@/components/contacts'
import Projects from '@/components/projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/brands',
      name: 'Brands',
      component: Brands
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
