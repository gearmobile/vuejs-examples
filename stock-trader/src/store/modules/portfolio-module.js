const state = {
  stocks: [],
  funds: 10000
}

const mutations = {
  'BUY_STOCKS' (state, payload) {
    const record = state.stocks.find(element => { return element.name === payload.name })
    console.log(record)
    if (record) {
      record.quantity += payload.quantity
    } else {
      state.stocks.push(payload)
    }
    state.funds -= payload.price * payload.quantity
  }
}

const actions = {
  buyStocks ({ commit }, payload) {
    commit('BUY_STOCKS', payload)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
