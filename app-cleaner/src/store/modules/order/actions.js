import data from '../../../data/data.json'
import metros from '../../../data/metros.json'

export default {
  initMetros ({ commit }) {
    commit('SET_METROS', metros)
  },
  initCustomer ({ commit }) {
    commit('SET_CUSTOMER', data.customer)
  },
  showOrder ({ commit }) {
    commit('SHOW_ORDER')
  },
  modalToggle ({ commit }) {
    commit('MODAL_TOGGLE')
  }
}
