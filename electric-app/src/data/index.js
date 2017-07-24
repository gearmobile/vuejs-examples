import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const root = 'http://localhost:3000'

Vue.use(Vuex)

const state = {
  points: [],
  order: [],
  material: 'brick'
}

const mutations = {
  'INIT_DATA' (state) {
    axios.get(root + '/electric')
      .then(res => {
        state.points = res.data
      })
      .catch(err => console.log(err))
  },
  'ADD_ORDER' (state, payload) {
    const sample = state.order.find(el => el.name === payload.order.name)
    if (sample) {
      sample.quantity = payload.value
    } else {
      const order = {
        name: payload.order.name,
        title: payload.order.title,
        quantity: payload.value
      }
      state.order.push(order)
    }
  },
  'REMOVE_ORDER' (state, payload) {
    const sample = state.order.find(el => el.name === payload.order.name)
    if (sample.quantity > payload.value) {
      sample.quantity -= (sample.quantity - payload.value)
    } else {
      state.order.splice(state.order.indexOf(payload.order), 1)
    }
  },
  'SET_MATERIAL' (state, payload) {
    state.material = payload
  },
  'CLEAR_ORDER' (state) {
    state.order.length = 0
    state.material = 'brick'
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
  },
  clearOrder ({ commit }) {
    commit('CLEAR_ORDER')
  },
  setMaterial ({ commit }, payload) {
    commit('SET_MATERIAL', payload)
  }
}

const getters = {
  getData (state) {
    return state.points
  },
  getMaterial (state) {
    return state.material
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
  // strict: true
})

export default store
