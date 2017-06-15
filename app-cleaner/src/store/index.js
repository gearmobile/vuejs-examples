import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  clearing: 'single',
  room: {
    value: 1,
    price: 1000,
    min: 1,
    max: 12,
    step: 1,
    time: 30
  },
  bathroom: {
    value: 1,
    price: 1200,
    min: 1,
    max: 5,
    step: 1,
    time: 30
  },
  discount: {
    first: {
      value: 10,
      state: false
    },
    second: {
      value: 15,
      state: false
    },
    third: {
      value: 20,
      state: false
    }
  }
}

const mutations = {
  'INCREASE_ROOM' (state) {
    state.room.value += state.room.step
  },
  'DECREASE_ROOM' (state) {
    if (state.room.value === state.room.min) {
      return
    }
    state.room.value -= state.room.step
  },
  'INCREASE_BATHROOM' (state) {
    state.bathroom.value += state.bathroom.step
  },
  'DECREASE_BATHROOM' (state) {
    if (state.bathroom.value === state.bathroom.min) {
      return
    }
    state.bathroom.value -= state.bathroom.step
  },
  'SET_CLEARING_VALUE' (state, payload) {
    state.clearing = payload
  },
  'DISCOUNT_FIRST' (state) {
    state.discount.second.state = false
    state.discount.third.state = false
    state.discount.first.state = !state.discount.first.state
  },
  'DISCOUNT_SECOND' (state) {
    state.discount.first.state = false
    state.discount.third.state = false
    state.discount.second.state = !state.discount.second.state
  },
  'DISCOUNT_THIRD' (state) {
    state.discount.first.state = false
    state.discount.second.state = false
    state.discount.third.state = !state.discount.third.state
  }
}

const actions = {
  increaseRoom ({ commit }) {
    commit('INCREASE_ROOM')
  },
  decreaseRoom ({ commit }) {
    commit('DECREASE_ROOM')
  },
  increaseBathroom ({ commit }) {
    commit('INCREASE_BATHROOM')
  },
  decreaseBathroom ({ commit }) {
    commit('DECREASE_BATHROOM')
  },
  setClearingValue ({ commit }, payload) {
    commit('SET_CLEARING_VALUE', payload)
  },
  onDiscountFirst ({ commit }) {
    commit('DISCOUNT_FIRST')
  },
  onDiscountSecond ({ commit }) {
    commit('DISCOUNT_SECOND')
  },
  onDiscountThird ({ commit }) {
    commit('DISCOUNT_THIRD')
  }
}

const getters = {
  getRoomValue (state) {
    return state.room.value
  },
  roomStateDecrease (state) {
    return state.room.value === state.room.min
  },
  roomStateIncrease (state) {
    return state.room.value === state.room.max
  },
  getBathroomValue (state) {
    return state.bathroom.value
  },
  bathroomStateDecrease (state) {
    return state.bathroom.value === state.bathroom.min
  },
  bathroomStateIncrease (state) {
    return state.bathroom.value === state.bathroom.max
  },
  getClearingValue (state) {
    return state.clearing
  },
  getdDiscountFirstValue (state) {
    return state.discount.first.value
  },
  getDiscountSecondValue (state) {
    return state.discount.second.value
  },
  getDiscountThirdValue (state) {
    return state.discount.third.value
  },
  getDiscountFirstState (state) {
    return state.discount.first.state
  },
  getDiscountSecondState (state) {
    return state.discount.second.state
  },
  getDiscountThirdState (state) {
    return state.discount.third.state
  },
  showDiscountBlock (state) {
    return state.clearing === 'single' || state.clearing === 'general'
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
