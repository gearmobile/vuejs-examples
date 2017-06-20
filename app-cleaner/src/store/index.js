import Vue from 'vue'
import Vuex from 'vuex'

import mainModule from './modules/main-module'
import resultModule from './modules/result-module'
import orderModule from './modules/order-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mainModule,
    resultModule,
    orderModule
  }
})

export default store
