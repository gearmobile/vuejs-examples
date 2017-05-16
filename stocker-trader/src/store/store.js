import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stock-module'
import portfolio from './modules/portfolio-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
})

export default store
