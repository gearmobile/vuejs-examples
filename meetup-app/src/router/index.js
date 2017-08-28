import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Meetup from '@/components/meetups/listMeetups'
import MeetupEdit from '@/components/meetups/editMeetup'
import MeetupNew from '@/components/meetups/newMeetup'
import MeetupSingle from '@/components/meetups/singleMeetup'
import Profile from '@/components/users/profile'
import SignIn from '@/components/users/signIn'
import SignUp from '@/components/users/signUp'
import Guard from '@/components/router/guard'

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
      path: '/meetup/edit',
      name: 'MeetupEdit',
      component: MeetupEdit
    },
    {
      path: '/meetup/new',
      name: 'MeetupNew',
      component: MeetupNew,
      beforeEnter: Guard
    },
    {
      path: '/meetup/:id',
      name: 'MeetupSingle',
      component: MeetupSingle,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: Guard
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
