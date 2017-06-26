export default {
  'SET_METROS' (state, payload) {
    state.metros = payload
  },
  'SET_CUSTOMER' (state, payload) {
    state.customer = payload
  },
  'SHOW_ORDER' (state) {
    state.showOrder = !state.showOrder
  },
  'MODAL_TOGGLE' (state) {
    state.modal = !state.modal
  }
}
