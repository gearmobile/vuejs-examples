import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stock-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stocks
  }
})

export default store
