import datas from '../../data/data'

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, payload) {
    state.stocks = payload
  }
}

const actions = {
  initStocks ({ commit }) {
    commit('SET_STOCKS', datas)
  }
}

const getters = {
  getStocks (state) {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
