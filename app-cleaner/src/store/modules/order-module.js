import metros from '../../data/metros.json'

const state = {
  showOrder: false,
  metros: []
}

const mutations = {
  'SHOW_ORDER' (state) {
    state.showOrder = !state.showOrder
  },
  'SET_METROS' (state, payload) {
    state.metros = payload
  }
}

const actions = {
  showOrder ({ commit }) {
    commit('SHOW_ORDER')
  },
  initMetros ({ commit }) {
    commit('SET_METROS', metros)
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
