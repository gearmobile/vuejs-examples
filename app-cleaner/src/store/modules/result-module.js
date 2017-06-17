import promocode from '../../data/promocode'
import discount from '../../data/discount'

const state = {
  order: [],
  promocode: null,
  discount: null
}

const mutations = {
  'ADD_ORDER' (state, payload) {
    const record = state.order.find(element => element.name === payload.name)
    if (record) {
      record.quantity += payload.quantity
    } else {
      state.order.push(payload)
    }
  },
  'DELETE_ORDER' (state, payload) {
    const record = state.order.find(element => element.name === payload.name)
    if (record.quantity > payload.quantity) {
      record.quantity -= payload.quantity
    } else {
      state.order.splice(state.order.indexOf(payload), 1)
    }
  },
  'SET_PROMOCODE' (state, payload) {
    state.promocode = payload
  },
  'SET_DISCOUNT' (state, payload) {
    state.discount = payload
  }
}

const actions = {
  addOrder ({ commit }, payload) {
    commit('ADD_ORDER', payload)
  },
  deleteOrder ({ commit }, payload) {
    commit('DELETE_ORDER', payload)
  },
  initPromocode ({ commit }) {
    commit('SET_PROMOCODE', promocode)
  },
  initDiscount ({ commit }) {
    commit('SET_DISCOUNT', discount)
  }
}

const getters = {
  getResult (state) {
    let total = state.order.reduce((sum, c) => sum + c.quantity * c.price, 0)
    if (state.promocode.status) {
      total = total - (total * state.promo.discount) / 100
    }
    let discount = null
    if (state.discount[0].status) {
      discount = (total * state.discount[0].value) / 100
    }
    if (state.discount[1].status) {
      discount = (total * state.discount[1].value) / 100
    }
    if (state.discount[2].status) {
      discount = (total * state.discount[2].value) / 100
    }
    const result = total + discount
    return result
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
