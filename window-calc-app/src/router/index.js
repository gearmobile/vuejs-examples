import Vue from 'vue'
import Router from 'vue-router'
import SingleWindow from '@/components/single-window'
import DoubleWindow from '@/components/double-window'
import ThreeWindow from '@/components/three-window'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SingleWindow',
      component: SingleWindow
    },
    {
      path: '/doublewindow',
      name: 'DoubleWindow',
      component: DoubleWindow
    },
    {
      path: '/threewindow',
      name: 'ThreeWindow',
      component: ThreeWindow
    }
  ]
})
