import data from '../../../data/data.json'

export default {
  initResult ({ commit }) {
    commit('SET_DISCOUNT', data.sei)
    commit('SET_PROMOCODE', data.sette)
  },
  addOrder ({ commit }, payload) {
    commit('ADD_ORDER', payload)
  },
  deleteOrder ({ commit }, payload) {
    commit('DELETE_ORDER', payload)
  },
  setDiscountStatus ({ commit }, payload) {
    commit('SET_DISCOUNT_STATUS', payload)
  },
  setPromoValue ({ commit }, payload) {
    commit('SET_PROMO_VALUE', payload)
  }
}
