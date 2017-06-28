import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  periods: [
    {
      name: 'period1',
      value: 1,
      price: 1200
    },
    {
      name: 'period2',
      value: 1.5,
      price: 1300
    },
    {
      name: 'period3',
      value: 2,
      price: 1400
    },
    {
      name: 'period4',
      value: 3,
      price: 1500
    }
  ],
  services: [
    {
      name: 'service1',
      title: 'макияж',
      price: 200
    },
    {
      name: 'service2',
      title: 'аренда платья',
      price: 300
    },
    {
      name: 'service3',
      title: 'прическа',
      price: 400
    },
    {
      name: 'service4',
      title: 'хаски',
      price: 500
    }
  ],
  certificate: [
    {
      name: 'certificate1',
      title: 'желтый кролик',
      price: 1000
    },
    {
      name: 'certificate2',
      title: 'классика в рамочке',
      price: 1200
    }
  ],
  order: {
    time: null,
    service: null,
    certificate: null
  }
}
const mutations = {
  'SET_TIME_PRICE' (state, payload) {
    state.order.time = payload
  },
  'SET_SERVICE_PRICE' (state, payload) {
    state.order.service = payload
  },
  'SET_CERTIFICATE_PRICE' (state, payload) {
    state.order.certificate = payload
  }
}
const actions = {
  getTimePrice ({ commit }, payload) {
    commit('SET_TIME_PRICE', payload)
  },
  getServicePrice ({ commit }, payload) {
    commit('SET_SERVICE_PRICE', payload)
  },
  getCertificatePrice ({ commit }, payload) {
    commit('SET_CERTIFICATE_PRICE', payload)
  }
}
const getters = {
  getPeriods (state) {
    return state.periods
  },
  getServices (state) {
    return state.services
  },
  getCertificate (state) {
    return state.certificate
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
