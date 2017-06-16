import Vue from 'vue'
import Vuex from 'vuex'

import mainModule from './modules/main-module'
import resultModule from './modules/result-module'
// import actionModule from './modules/action-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mainModule,
    resultModule
    // actionModule
  }
})

export default store
