import discount from '../../data/discount'
import promocode from '../../data/promocode'

const state = {
  order: [],
  discount: [],
  promocode: null,
  discountStatus: null
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
  'SET_DISCOUNT' (state, payload) {
    state.discount = payload
  },
  'SET_PROMOCODE' (state, payload) {
    state.promocode = payload
  },
  'SET_DISCOUNT_STATUS' (state, payload) {
    state.discountStatus = payload.flag ? payload.name : null
    for (let i = 0; i < state.discount.length; i += 1) {
      if (state.discount[i].name !== payload.name) {
        state.discount[i].flag = true
      }
    }
  },
  'SET_PROMO_VALUE' (state, payload) {
    state.promocode.value = payload
    if (parseInt(state.promocode.value) === state.promocode.check) {
      state.promocode.status = true
      state.promocode.error = false
    } else {
      state.promocode.error = true
    }
  }
}

const actions = {
  addOrder ({ commit }, payload) {
    commit('ADD_ORDER', payload)
  },
  deleteOrder ({ commit }, payload) {
    commit('DELETE_ORDER', payload)
  },
  initDiscount ({ commit }) {
    commit('SET_DISCOUNT', discount)
  },
  setDiscountStatus ({ commit }, payload) {
    commit('SET_DISCOUNT_STATUS', payload)
  },
  initPromocode ({ commit }) {
    commit('SET_PROMOCODE', promocode)
  },
  setPromoValue ({ commit }, payload) {
    commit('SET_PROMO_VALUE', payload)
  }
}

const getters = {
  getResult (state) {
    const total = state.order.reduce((sum, c) => sum + c.quantity * c.price, 0)
    return total
  },
  getTime (state) {
    const total = (state.order.reduce((sum, c) => sum + c.time, 0)) / 60
    return total
  },
  getWorkers (state, getters) {
    const time = getters.getTime
    const worker = time > 7 ? 2 : 1
    return worker
  },
  getPromoSum (state, getters) {
    let total = getters.getResult
    if (state.promocode.status) {
      const promo = total - total * state.promocode.percent / 100
      return promo
    }
  },
  getDiscountSum (state, getters) {
    const total = getters.getResult
    for (let i = 0; i < state.discount.length; i += 1) {
      if (state.discount[i].name === state.discountStatus) {
        const discount = total * state.discount[i].value / 100
        return discount
      }
    }
  },
  getTotalDiscountSum (state, getters) {
    const commonSum = getters.getResult
    const discountSum = getters.getDiscountSum
    const result = commonSum - discountSum
    return result
  },
  getDiscount (state) {
    return state.discount
  },
  getDiscountStatus (state) {
    return state.discountStatus
  },
  showCommon () {
    return !state.discountStatus
  },
  showDiscount () {
    return !!state.discountStatus
  },
  getPromocode (state) {
    return state.promocode
  },
  getPromoStatus (state) {
    return state.promocode.status
  },
  getPromoError (state) {
    return state.promocode.error
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
