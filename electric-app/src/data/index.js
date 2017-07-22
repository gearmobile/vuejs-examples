import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const root = 'http://localhost:3000'

Vue.use(Vuex)

const state = {
  points: []
}

const mutations = {
  'INIT_DATA' (state) {
    axios.get(root + '/electric')
      .then(res => {
        state.points = res.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const actions = {
  initData ({ commit }) {
    commit('INIT_DATA')
  }
}

const getters = {
  getData (state) {
    return state.points
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
