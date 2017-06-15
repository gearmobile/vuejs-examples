import Vue from 'vue'
import Vuex from 'vuex'

import mainModule from './modules/main-module'
import actionModule from './modules/action-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mainModule,
    actionModule
  }
})

export default store
