import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  singleWindow: {
    dimentions: {
      minHeight: 1000,
      maxHeight: 1650,
      stepHeight: 10,
      minWidth: 400,
      maxWidth: 1400,
      stepWidth: 10
    },
    sizes: {
      height: 1000,
      width: 1000
    }
  }
}

const getters = {
  minHeight (state) {
    return state.singleWindow.dimentions.minHeight
  },
  maxHeight (state) {
    return state.singleWindow.dimentions.maxHeight
  },
  stepHeight (state) {
    return state.singleWindow.dimentions.stepHeight
  },
  minWidth (state) {
    return state.singleWindow.dimentions.minWidth
  },
  maxWidth (state) {
    return state.singleWindow.dimentions.maxWidth
  },
  stepWidth (state) {
    return state.singleWindow.dimentions.stepWidth
  },
  windowHeight (state) {
    return state.singleWindow.sizes.height
  },
  windowWidth (state) {
    return state.singleWindow.sizes.width
  }
}

const mutations = {
  'UPDATE_HEIGHT' (state, payload) {
    state.singleWindow.sizes.height = payload
  },
  'UPDATE_WIDTH' (state, payload) {
    state.singleWindow.sizes.width = payload
  }
}

const actions = {
  updateHeight ({ commit }, payload) {
    commit('UPDATE_HEIGHT', payload)
  },
  updateWidth ({ commit }, payload) {
    commit('UPDATE_WIDTH', payload)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
