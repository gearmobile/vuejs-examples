import Vue from 'vue'
import Router from 'vue-router'
import singleWindow from '@/components/singleWindow'
import doubleWindow from '@/components/doubleWindow'
import tripleWindow from '@/components/tripleWindow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'singleWindow',
      component: singleWindow
    },
    {
      path: '/doublewindow',
      name: 'doubleWindow',
      component: doubleWindow
    },
    {
      path: '/triplewindow',
      name: 'tripleWindow',
      component: tripleWindow
    }
  ]
})
