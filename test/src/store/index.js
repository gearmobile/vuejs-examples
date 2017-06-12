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
  },
  'SET_ARRAY' (state, payload) {
    state.array = payload
  }
}

const actions = {
  setBool ({ commit }, payload) {
    commit('SET_BOOL', payload)
  },
  setArray ({ commit }, payload) {
    commit('SET_ARRAY', payload)
  }
}

const getters = {
  getBool (state) {
    return state.bool
  },
  getArray (state) {
    return state.array
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
