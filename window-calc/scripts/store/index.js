const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  	increment (state) {
      state.count += 1
    },
    decrement (state) {
      state.count -= 1
    }
  },
  actions: {
    onIncrement ({ commit }) {
      commit(increment)
    },
    onDecrement ({ commit }) {
      commit(decrement)
    }
  },
  getters: {
    getCount (state) {
      return state.count
    }
  }
})