import data from '../../data/primo'
import cards from '../../data/secondo'
import generals from '../../data/general'
import repairs from '../../data/repair'
import promos from '../../data/promotion'
// import discount from '../../data/discount'

const state = {
  items: [],
  cards: [],
  generals: [],
  repairs: [],
  promos: []
  // discount: []
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
  'SET_PROMOS' (state, payload) {
    state.promos = payload
  }
  // 'SET_DISCOUNT' (state, payload) {
  //   state.discount = payload
  // }
}

const actions = {
  initItems ({ commit }) {
    commit('SET_ITEMS', data)
  },
  initCards ({ commit }) {
    commit('SET_CARDS', cards)
  },
  initGenerals ({ commit }) {
    commit('SET_GENERALS', generals)
  },
  initRepairs ({ commit }) {
    commit('SET_REPAIRS', repairs)
  },
  initPromos ({ commit }) {
    commit('SET_PROMOS', promos)
  }
  // initDiscount ({ commit }) {
  //   commit('SET_DISCOUNT', discount)
  // }
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
  getPromos (state) {
    return state.promos
  }
  // getDiscount (state) {
  //   return state.discount
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
