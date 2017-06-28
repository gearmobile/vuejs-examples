import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  period: [
    {
      id: 'time1',
      time: 1,
      price: 1200
    },
    {
      id: 'time2',
      time: 1.5,
      price: 1300
    },
    {
      id: 'time3',
      time: 2,
      price: 1400
    },
    {
      id: 'time4',
      time: 3,
      price: 1500
    }
  ],
  order: {
    time: null
  }
}
const mutations = {
  'SET_TIME' (state, payload) {
    state.order.time = payload
  }
}
const actions = {
  getTime ({ commit }, payload) {
    commit('SET_TIME', payload)
  }
}
const getters = {
  getPeriod (state) {
    return state.period
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
