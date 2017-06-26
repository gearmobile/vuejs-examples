export default {
  'SHOW_ORDER' (state) {
    state.showOrder = !state.showOrder
  },
  'SET_METROS' (state, payload) {
    state.metros = payload
  },
  'SET_CUSTOMER' (state, payload) {
    state.customer = payload
  },
  'MODAL_TOGGLE' (state) {
    state.modal = !state.modal
  }
}
