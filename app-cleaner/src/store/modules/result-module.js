// import promocode from '../../data/promocode'

const state = {
  order: []
  // promocode: null
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
  }
  // 'SET_PROMOCODE' (state, payload) {
  //   state.promocode = payload
  // }
}

const actions = {
  addOrder ({ commit }, payload) {
    commit('ADD_ORDER', payload)
  },
  deleteOrder ({ commit }, payload) {
    commit('DELETE_ORDER', payload)
  }
  // initPromocode ({ commit }) {
  //   commit('SET_PROMOCODE', promocode)
  // }
}

const getters = {
  getResult (state) {
    let total = state.order.reduce((sum, c) => sum + c.quantity * c.price, 0)
    // if (state.promocode.status) {
    //   total = total - (total * state.promo.percent) / 100
    // }
    return total
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
