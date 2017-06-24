import Vue from 'vue'
import Vuex from 'vuex'

import main from './modules/main/index'
import result from './modules/result/index'
import order from './modules/order/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    main,
    result,
    order
  }
})

export default store
