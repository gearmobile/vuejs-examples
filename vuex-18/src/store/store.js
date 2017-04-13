import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  step: 0,
  time: 0
}

const getters = {
  output (state) {
    return state.count + ' clicks'
  },
  delayOutput (state) {
    return state.step + ' steps'
  },
  timeOutput (state) {
    return state.time + ' after times'
  }
}

const mutations = {
  inlarge (state) {
    state.count += 1
  },
  insmall (state) {
    state.count -= 1
  },
  large (state, payload) {
    state.step += payload
  },
  small (state, payload) {
    state.step -= payload
  },
  picollo (state, payload) {
    state.time -= payload
  }
}

const actions = {
  increase (context) {
    context.commit('inlarge')
  },
  decrease (context) {
    context.commit('insmall')
  },
  more (context, payload) {
    context.commit('large', payload)
  },
  less (context, payload) {
    context.commit('small', payload)
  },
  actPicollo (context, payload) {
    setTimeout(() => {
      context.commit('picollo', payload.count)
    }, payload.delay)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
