import data from '../../../data/data.json'

export default {
  initData ({ commit }) {
    commit('SET_ITEMS', data.primo)
    commit('SET_CARDS', data.secondo)
    commit('SET_GENERALS', data.tetro)
    commit('SET_REPAIRS', data.quattro)
  }
}
