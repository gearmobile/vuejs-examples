import metros from '../../data/metros.json'

const state = {
  showOrder: false,
  metros: [],
  customer: {}
}

const mutations = {
  'SHOW_ORDER' (state) {
    state.showOrder = !state.showOrder
  },
  'SET_METROS' (state, payload) {
    state.metros = payload
  },
  'SET_CUSTOMER' (state, payload) {
    state.customer = payload
  }
}

const actions = {
  showOrder ({ commit }) {
    commit('SHOW_ORDER')
  },
  initMetros ({ commit }) {
    commit('SET_METROS', metros)
  },
  setCustomer ({ commit }, payload) {
    commit('SET_CUSTOMER', payload)
  }
}

const getters = {
  getOrder (state) {
    return state.showOrder
  },
  getMetros (state) {
    return state.metros
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
