import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Meetup from '@/components/meetup/meetup'
import MeetupNew from '@/components/meetup/meetupNew'
import MeetupDetails from '@/components/meetup/meetupDetails'
import Profile from '@/components/user/profile'
import SignIn from '@/components/user/signin'
import SignUp from '@/components/user/signup'

// @ ссылка - на src
// src - root directory for now
// это настройка webpack

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetup',
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/meetup/new',
      name: 'MeetupNew',
      component: MeetupNew
    },
    {
      path: '/meetup/:id',
      name: 'MeetupDetails',
      component: MeetupDetails,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
