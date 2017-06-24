export default {
  'SET_PROMOCODE' (state, payload) {
    state.promocode = payload
  },
  'SET_PROMO_VALUE' (state, payload) {
    state.promocode.value = payload
    if (parseInt(state.promocode.value) === state.promocode.check) {
      state.promocode.status = true
      state.promocode.error = false
    } else {
      state.promocode.error = true
    }
  }
}
