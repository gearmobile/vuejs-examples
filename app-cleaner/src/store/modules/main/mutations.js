export default {
  'SET_ITEMS' (state, payload) {
    state.items = payload
  },
  'SET_CARDS' (state, payload) {
    state.cards = payload
  },
  'SET_GENERALS' (state) {
    state.generals = state.cards.filter(el => el.name === 'ironing' || el.name === 'pane' || el.name === 'wardrobe')
  },
  'SET_REPAIRS' (state) {
    state.repairs = state.cards.filter(el => el.name === 'pane' || el.name === 'wardrobe' || el.name === 'addtime')
  }
}
