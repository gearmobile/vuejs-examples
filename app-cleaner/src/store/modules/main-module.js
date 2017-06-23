import data from '../../data/data.json'

const state = {
  items: [],
  cards: [],
  generals: [],
  repairs: [],
  promotion: []
}

const mutations = {
  'SET_ITEMS' (state, payload) {
    state.items = payload
  },
  'SET_CARDS' (state, payload) {
    state.cards = payload
  },
  'SET_GENERALS' (state, payload) {
    state.generals = payload
  },
  'SET_REPAIRS' (state, payload) {
    state.repairs = payload
  },
  'SET_PROMOTION' (state, payload) {
    state.promotion = payload
  }
}

const actions = {
  initData ({ commit }) {
    commit('SET_ITEMS', data.primo)
    commit('SET_CARDS', data.secondo)
    commit('SET_GENERALS', data.tetro)
    commit('SET_REPAIRS', data.quattro)
    commit('SET_PROMOTION', data.cinque)
  }
}

const getters = {
  getData (state) {
    return state.items
  },
  getCards (state) {
    return state.cards
  },
  getGenerals (state) {
    return state.generals
  },
  getRepairs (state) {
    return state.repairs
  },
  getPromotion (state) {
    return state.promotion
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
