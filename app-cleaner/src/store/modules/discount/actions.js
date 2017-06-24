import data from '../../../data/data.json'

export default {
  initResult ({ commit }) {
    commit('SET_DISCOUNT', data.sei)
  },
  setDiscountStatus ({ commit }, payload) {
    commit('SET_DISCOUNT_STATUS', payload)
  }
}
