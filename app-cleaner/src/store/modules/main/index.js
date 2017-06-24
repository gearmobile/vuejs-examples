import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  items: [],
  cards: [],
  generals: [],
  repairs: [],
  promotion: []
}

export default {
  state,
  getters,
  mutations,
  actions
}
