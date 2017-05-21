// import currState from '../../data/storage.json'
// const currState = null

const state = {
  stocks: [],
  funds: 10000
}

const mutations = {
  'BUY_STOCKS' (state, payload) {
    const record = state.stocks.find(element => { return element.name === payload.name })
    if (record) {
      record.quantity += payload.quantity
    } else {
      state.stocks.push({
        name: payload.name,
        price: payload.price,
        quantity: payload.quantity
      })
    }
    state.funds -= payload.price * payload.quantity
  },
  'SELL_STOCKS' (state, payload) {
    const record = state.stocks.find(element => { return element.name === payload.name })
    if (record.quantity >= payload.quantity) {
      record.quantity -= payload.quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(payload), 1)
    }
    state.funds += payload.price * payload.quantity
  },
  'SAVE_STOCKS' (state, currState) {
    currState = JSON.stringify(state)
  },
  'LOAD_STOCKS' (state) {}
}

const actions = {
  buyStocks ({ commit }, payload) {
    commit('BUY_STOCKS', payload)
  },
  sellStocks ({ commit }, payload) {
    commit('SELL_STOCKS', payload)
  },
  saveStocks ({ commit }) {
    commit('SAVE_STOCKS')
  },
  loadStocks ({ commit }) {
    commit('LOAD_STOCKS')
  }
}

const getters = {
  getPortfolioStocks (state) {
    return state.stocks
  },
  getFunds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
