import metros from '../../../data/metros.json'

export default {
  showOrder ({ commit }) {
    commit('SHOW_ORDER')
  },
  initMetros ({ commit }) {
    commit('SET_METROS', metros)
  },
  setCustomer ({ commit }, payload) {
    commit('SET_CUSTOMER', payload)
  }
}
