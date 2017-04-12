import Vue from 'vue'
import Vuex from 'vuex'

/* eslint no-return-assign: "error" */
Vue.use(Vuex)

const state = {
  counter: 0
}

const getters = {
  increase (state) {
    let result = state.counter++
    return result
  },
  decrease (state) {
    state.counter--
    return state.counter
  }
}

const store = new Vuex.Store({
  state,
  getters
})

export default store
