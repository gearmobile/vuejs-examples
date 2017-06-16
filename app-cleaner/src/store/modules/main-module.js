import data from '../../data/primo'

const state = {
  items: []
}

const mutations = {
  'SET_ITEMS' (state, payload) {
    state.items = payload
  }
}

const actions = {
  initItems ({ commit }) {
    commit('SET_ITEMS', data)
  }
}

const getters = {
  getData (state) {
    return state.items
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
