import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  bool: true,
  array: ['bar']
}

const mutations = {
  'SET_BOOL' (state, payload) {
    state.bool = payload
  }
}

const actions = {
  setBool ({ commit }, payload) {
    commit('SET_BOOL', payload)
  }
}

const getters = {
  getBool (state) {
    return state.bool
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
