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
    state.discountStatus = payload
  },
  'SET_PROMO_VALUE' (state, payload) {
    state.promocode.value = payload
  }
  // 'CHECK_PROMO' (state) {
  //   if (state.promocode.value === state.promocode.check) {
  //     this.promocode.status = true
  //   }
  // }
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
    // get total sum
    let total = state.order.reduce((sum, c) => sum + c.quantity * c.price, 0)
    // check discount
    for (let i = 0; i < state.discount.length; i += 1) {
      if (state.discount[i].name === state.discountStatus) {
        total - (total * state.discount[i].value) / 100
      }
    }
    // check promocode
    if (parseInt(state.promocode.value) === state.promocode.check) {
      total -= total * state.promocode.percent / 100
    }
    // get result
    return total
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
  },
  getPromocode (state) {
    return state.promocode
  },
  getPromoValue (state) {
    return state.promocode.value
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
