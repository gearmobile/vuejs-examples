import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  'INCREASE' (state) {
    state.count += 1
  },
  'DECREASE' (state) {
    state.count -= 1
  }
}

const actions = {
  increase ({ commit }) {
    commit('INCREASE')
  },
  decrease ({ commit }) {
    commit('DECREASE')
  }
}

const getters = {
  getCount (state) {
    return state.count
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
