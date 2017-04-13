import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  output (state) {
    return state.count + ' clicks'
  }
}

const mutations = {
  inlarge (state) {
    state.count += 1
  },
  insmall (state) {
    state.count -= 1
  }
}

const actions = {
  increase (context) {
    context.commit('inlarge')
  },
  decrease (context) {
    context.commit('insmall')
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
