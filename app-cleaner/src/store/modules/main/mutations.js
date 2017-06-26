export default {
  'SET_ITEMS' (state, payload) {
    state.items = payload
  },
  'SET_CARDS' (state, payload) {
    state.cards = payload
  },
  'SET_GENERALS' (state) {
    state.generals = state.cards.filter(el => /ironing|pane|wardrobe/.test(el.name))
  },
  'SET_REPAIRS' (state) {
    state.repairs = state.cards.filter(el => /pane|wardrobe|addtime/.test(el.name))
  }
}
