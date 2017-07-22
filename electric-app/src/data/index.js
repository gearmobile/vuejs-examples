import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const root = 'http://localhost:3000'

Vue.use(Vuex)

const state = {
  points: [],
  order: []
}

const mutations = {
  'INIT_DATA' (state) {
    axios.get(root + '/electric')
      .then(res => {
        state.points = res.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  'ADD_ORDER' (state, payload) {
    const sample = state.order.find(el => el.name === payload.name)
    if (sample) {
      sample.quantity += payload.quantity
    } else {
      state.order.push(payload)
    }
  },
  'REMOVE_ORDER' (state, payload) {
    const sample = state.order.find(el => el.name === payload.name)
    if (sample.quantity > 0) {
      sample.quantity -= payload.quantity
    } else {
      state.order.splice(state.order.indexOf(payload), 1)
    }
  }
}

const actions = {
  initData ({ commit }) {
    commit('INIT_DATA')
  },
  addOrder ({ commit }, payload) {
    commit('ADD_ORDER', payload)
  },
  removeOrder ({ commit }, payload) {
    commit('REMOVE_ORDER', payload)
  }
}

const getters = {
  getData (state) {
    return state.points
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
