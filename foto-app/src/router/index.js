import Vue from 'vue'
import Router from 'vue-router'
import Primo from '@/components/primo'
import Secondo from '@/components/secondo'
import Tetro from '@/components/tetro'
import Quattro from '@/components/quattro'
import Cinque from '@/components/cinque'
import Sei from '@/components/sei'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/1',
      name: 'Primo',
      component: Primo
    },
    {
      path: '/2',
      name: 'Secondo',
      component: Secondo
    },
    {
      path: '/3',
      name: 'Tetro',
      component: Tetro
    },
    {
      path: '/4',
      name: 'Quattro',
      component: Quattro
    },
    {
      path: '/5',
      name: 'Cinque',
      component: Cinque
    },
    {
      path: '/6',
      name: 'Sei',
      component: Sei
    }
  ]
})
