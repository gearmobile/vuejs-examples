import data from '../../../data/data.json'

export default {
  initPromo ({ commit }) {
    commit('SET_PROMOCODE', data.sette)
  },
  setPromoValue ({ commit }, payload) {
    commit('SET_PROMO_VALUE', payload)
  }
}
