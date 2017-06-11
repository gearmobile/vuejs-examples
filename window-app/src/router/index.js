import Vue from 'vue'
import Router from 'vue-router'
import singleWindow from '@/components/singleWindow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'singleWindow',
      component: singleWindow
    }
  ]
})
