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
  routes: [
    {
      path: '/',
      name: 'Primo',
      component: Primo
    },
    {
      path: '/secondo',
      // path: '/:id',
      name: 'Secondo',
      component: Secondo
    },
    {
      path: '/tetro',
      // path: '/:id',
      name: 'Tetro',
      component: Tetro
    },
    {
      path: '/quattro',
      // path: '/:id',
      name: 'Quattro',
      component: Quattro
    },
    {
      path: '/cinque',
      // path: '/:id',
      name: 'Cinque',
      component: Cinque
    },
    {
      path: '/sei',
      // path: '/:id',
      name: 'Sei',
      component: Sei
    }
  ]
})
