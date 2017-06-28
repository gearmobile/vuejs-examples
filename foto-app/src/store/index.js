import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  session: {
    period: [
      {
        id: 1,
        time: 1,
        price: 1200
      },
      {
        id: 2,
        time: 1.5,
        price: 1300
      },
      {
        id: 3,
        time: 2,
        price: 1400
      },
      {
        id: 4,
        time: 3,
        price: 1500
      }
    ]
  },
  order: []
}
const mutations = {
  'SET_TIME' (state, payload) {
    const sample = state.order.find(el => el.id === payload.id)
    if (sample) {
      return
    }
    state.order.push({
      id: payload.id,
      time: payload.time,
      price: payload.price
    })
  }
}
const actions = {
  getTime ({ commit }, payload) {
    commit('SET_TIME', payload)
  }
}
const getters = {
  getPeriod (state) {
    return state.session.period
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
