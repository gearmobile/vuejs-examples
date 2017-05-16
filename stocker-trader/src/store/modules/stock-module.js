import stocks from '../../data/data'

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, payload) {
    state.stocks = payload
  },
  'RND_STOCK' (state) {
    //
  }
}

const actions = {
  buyStock ({ commit }, order) {
    commit()
  },
  setStocks ({ commit }) {
    commit('SET_STOCKS', stocks) // stocks - reference to line 1
  },
  randomizeStocks ({ commit }) {
    commit('RND_STOCK ')
  }
}

const getters = {
  stocks () {
    return state.stocks // reference to line 4
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
