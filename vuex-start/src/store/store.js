import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  evenOdd (state) {
    return state.count % 2 === 0 ? 'even' : 'odd'
  }
}

const mutations = {
  increment (state) {
    state.count += 1
  },
  decrement (state) {
    state.count -= 1
  }
}

const actions = {
  //
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
export default store
