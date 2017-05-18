const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCKS' (state, { orderPrice, orderQuantity, orderID }) {
    const record = state.stocks.find(el => el.id === orderID)
    if (record) {
      record.quantity += orderQuantity
    } else {
      state.stocks.push({
        id: orderID,
        quantity: orderQuantity
      })
    }
    state.funds -= orderPrice * orderQuantity
  },
  'SEL_STOCKS' (state, { orderPrice, orderQuantity, orderID }) {
    const record = state.stocks.find(el => el.id === orderID)
    if (record.quantity > orderQuantity) {
      record.quantity -= orderQuantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += orderPrice * orderQuantity
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

const getters = {
  stockPortfolio () {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds () {
    return state.funds
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

