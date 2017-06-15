const state = {
  window: {
    value: 0,
    price: 200,
    min: 0,
    max: 25,
    step: 5,
    time: 30
  },
  action: {
    date: '31 июля',
    quantity: 'пять',
    sum: '1 000 рублей'
  }
}

const getters = {
  getWindowValue (state) {
    return state.window.value
  },
  windowStateDecrease (state) {
    return state.window.value === state.window.min
  },
  windowStateIncrease (state) {
    return state.window.value === state.window.max
  },
  showActionBlock (state) {
    return state.clearing !== 'repair'
  },
  getDate (state) {
    return state.action.date
  },
  getQuantity (state) {
    return state.action.quantity
  },
  getSum (state) {
    return state.action.sum
  }
}

const mutations = {
  'INCREASE_WINDOW' (state) {
    state.window.value += state.window.step
  },
  'DECREASE_WINDOW' (state) {
    if (state.window.value === state.window.min) {
      return
    }
    state.window.value -= state.window.step
  }
}

const actions = {
  increaseWindow ({ commit }) {
    commit('INCREASE_WINDOW')
  },
  decreaseWindow ({ commit }) {
    commit('DECREASE_WINDOW')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
