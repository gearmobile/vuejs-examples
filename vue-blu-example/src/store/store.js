import Vue from 'vue'
import Vuex from 'vuex'

/* eslint no-return-assign: "error" */
Vue.use(Vuex)

const state = {
  counter: 0
}

const mutations = {
  increase (state) {
    state.counter += 1
  },
  decrease (state) {
    state.counter -= 1
  }
}

const actions = {
  actIncrease (context) {
    context.commit('increase')
  },
  actDecrease (context) {
    context.commit('decrease')
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
