import Vue from 'vue'
import Vuex from 'vuex'

import mainModule from './modules/main-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mainModule
  }
})

export default store
