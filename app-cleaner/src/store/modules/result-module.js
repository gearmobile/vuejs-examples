const state = {
  order: []
}

const mutations = {
  'ADD_ORDER' (state, payload) {
    const record = state.order.find(element => element.name === payload.name)
    if (record) {
      record.value += payload.value
    } else {
      state.order.push(payload)
    }
  },
  'DELETE_ORDER' (state, payload) {
    const record = state.order.find(element => element.name === payload.name)
    if (record.value > payload.value) {
      record.value -= payload.value
    } else {
      state.order.splice(state.order.indexOf(payload), 1)
    }
  }
}

const actions = {
  addOrder ({ commit }, payload) {
    commit('ADD_ORDER', payload)
  },
  deleteOrder ({ commit }, payload) {
    commit('DELETE_ORDER', payload)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
