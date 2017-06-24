import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  order: [],
  discount: [],
  discountStatus: null,
  promocode: []
}

export default {
  state,
  mutations,
  actions,
  getters
}
