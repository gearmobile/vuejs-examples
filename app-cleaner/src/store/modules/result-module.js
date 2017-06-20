import discount from '../../data/discount'

const state = {
  order: [],
  discount: [],
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
  'SET_DISCOUNT_STATUS' (state, payload) {
    state.discountStatus = payload
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
  }
}

const getters = {
  getResult (state) {
    let total = state.order.reduce((sum, c) => sum + c.quantity * c.price, 0)
    let result = null
    if (state.discount[0].status) {
      result = total - (total * state.discount[0].value) / 100
    }
    if (state.discount[1].status) {
      result = total - (total * state.discount[1].value) / 100
    }
    if (state.discount[2].status) {
      result = total - (total * state.discount[1].value) / 100
    }
    return result
  },
  getDiscount (state) {
    return state.discount
  },
  getDiscountStatus (state) {
    return state.discountStatus
  },
  showCommon () {
    const check = state.discount[0].status || state.discount[1].status || state.discount[2].status
    return !check
  },
  showDiscount () {
    const check = state.discount[0].status || state.discount[1].status || state.discount[2].status
    return check
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
