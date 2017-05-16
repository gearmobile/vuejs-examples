const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCKS' (state, { stockPrice, quantity, stockID }) {
    const record = state.stocks.find(el => el.id === stockID)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockID,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SEL_STOCKS' (state, { stockPrice, quantity, stockID }) {
    const record = state.stocks.find(el => el.id === stockID)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  }
}

const actions = {
  sellStocks ({ commit }, order) {
    commit('SEL_STOCKS', order)
  },
  buyStocks ({ commit }, order) {
    commit('BUY_STOCKS', order)
  }
}

export default {
  state,
  mutations,
  actions
}

