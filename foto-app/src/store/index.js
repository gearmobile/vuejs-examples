import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  periods: [
    {
      value: 1,
      price: 1200
    },
    {
      value: 1.5,
      price: 1300
    },
    {
      value: 2,
      price: 1400
    },
    {
      value: 3,
      price: 1500
    }
  ],
  order: {
    time: null
  }
}
const mutations = {
  'SET_TIME_PRICE' (state, payload) {
    state.order.time = payload
  }
}
const actions = {
  getTimePrice ({ commit }, payload) {
    commit('SET_TIME_PRICE', payload)
  }
}
const getters = {
  getPeriods (state) {
    return state.periods
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
