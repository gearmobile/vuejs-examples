const state = {
  showOrder: false
}

const mutations = {
  'SHOW_ORDER' (state) {
    state.showOrder = !state.showOrder
  }
}

const actions = {
  showOrder ({ commit }) {
    commit('SHOW_ORDER')
  }
}

const getters = {
  getOrder (state) {
    return state.showOrder
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
