import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const root = 'http://localhost:3000'

Vue.use(Vuex)

const state = {
  points: [],
  order: [],
  material: 'brick',
  additional: []
}

const mutations = {
  'SUM_ORDER' (state) {
    if (state.material === 'brick') {
      // if ()
    }
  },
  'INIT_DATA' (state) {
    axios.get(root + '/electric')
      .then(res => {
        state.points = res.data
      })
      .catch(err => console.log(err))
  },
  'ADD_ORDER' (state, payload) {
    const sample = state.order.find(el => el.id === payload.order.name)
    if (sample) {
      sample.quantity = payload.value
    } else {
      const order = {
        id: payload.order.name,
        title: payload.order.title,
        quantity: payload.value
      }
      if (state.material === 'brick') {
        order.priceBrick = payload.order.priceBrick
      }
      if (state.material === 'concrete') {
        order.priceConcrete = payload.order.priceConcrete
      }
      if (state.material === 'wood') {
        order.priceWood = payload.order.priceWood
      }
      if (state.material === 'blocks') {
        order.priceBlocks = payload.order.priceBlocks
      }
      if (state.material === 'drywall') {
        order.priceDrywall = payload.order.priceDrywall
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
  'SET_ADDITIONAL' (state, payload) {
    state.additional = payload
  },
  'CLEAR_ORDER' (state) {
    state.order.length = 0
    state.additional.length = 0
    state.material = 'brick'
  },
  'CLEAR_SWITCH' (state) {
    state.order.length = 0
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
  clearSwitch ({ commit }) {
    commit('CLEAR_SWITCH')
  },
  setMaterial ({ commit }, payload) {
    commit('SET_MATERIAL', payload)
  },
  setAdditional ({ commit }, payload) {
    commit('SET_ADDITIONAL', payload)
  }
}

const getters = {
  getData (state) {
    return state.points
  },
  getMaterial (state) {
    return state.material
  },
  getAdditional (state) {
    return state.additional
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
