import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import stocks from './modules/stock-module'
import portfolio from './modules/portfolio-module'

const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
})

export default store
