
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  showOrder: false,
  metros: [],
  customer: [],
  modal: false
}

export default {
  state,
  mutations,
  actions,
  getters
}
