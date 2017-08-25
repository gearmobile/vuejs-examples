import Vue from 'vue'
import Vuex from 'vuex'
import { toString, toNumber, max, map } from 'lodash'
import * as firebase from 'firebase'

Vue.use(Vuex)

const state = {
  meetups: [
    {
      id: '1',
      path: 'http://via.placeholder.com/800x400',
      title: 'title one',
      date: new Date(),
      description: 'Lorem ipsum dolor sit amet, ei hendrerit constituto dissentias vim. Usu doctus facilisi torquatos cu, mel eligendi pericula eu. Quod nulla omnes ius ea, an nam sapientem persecuti disputationi, at qui partem expetendis disputando. Te volumus prodesset nam. Et sit nibh choro dicunt, an idque dicunt minimum nec. Viris possim verear ne mea.'
    },
    {
      id: '2',
      path: 'http://via.placeholder.com/800x400',
      title: 'title two',
      date: new Date(),
      description: 'Lorem ipsum dolor sit amet, ei hendrerit constituto dissentias vim. Usu doctus facilisi torquatos cu, mel eligendi pericula eu. Quod nulla omnes ius ea, an nam sapientem persecuti disputationi, at qui partem expetendis disputando. Te volumus prodesset nam. Et sit nibh choro dicunt, an idque dicunt minimum nec. Viris possim verear ne mea.'
    },
    {
      id: '3',
      path: 'http://via.placeholder.com/800x400',
      title: 'title three',
      date: new Date(),
      description: 'Lorem ipsum dolor sit amet, ei hendrerit constituto dissentias vim. Usu doctus facilisi torquatos cu, mel eligendi pericula eu. Quod nulla omnes ius ea, an nam sapientem persecuti disputationi, at qui partem expetendis disputando. Te volumus prodesset nam. Et sit nibh choro dicunt, an idque dicunt minimum nec. Viris possim verear ne mea.'
    }
  ],
  users: null,
  loading: false,
  error: null
}

const mutations = {
  'NEW_MEETUP' (state, payload) {
    state.meetups.push(payload)
  },
  'SET_USER' (state, payload) {
    state.users = payload
  },
  'SET_LOADING' (state, payload) {
    state.loading = payload
  },
  'SET_ERROR' (state, payload) {
    state.error = payload
  },
  'CLEAR_ERROR' (state) {
    state.error = null
  }
}

const actions = {
  newMeetup ({ commit }, payload) {
    const meetup = {
      id: toString(toNumber(max(map(state.meetups, 'id'))) + 1),
      title: payload.name,
      location: payload.location,
      path: payload.image,
      description: payload.description,
      date: payload.date,
      schedule: {
        ...payload.schedule
      }
    }
    commit('NEW_MEETUP', meetup)
  },
  signUp ({ commit }, payload) {
    commit('SET_LOADING', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('SET_LOADING', false)
          commit('CLEAR_ERROR')
          const newUser = {
            id: user.uid,
            meetups: []
          }
          commit('SET_USER', newUser)
        }
      )
      .catch(
        error => {
          commit('SET_LOADING', false)
          commit('SET_ERROR', error)
        }
      )
  },
  signIn ({ commit }, payload) {
    commit('SET_LOADING', true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('SET_LOADING', false)
          commit('CLEAR_ERROR')
          const newUser = {
            id: user.uid,
            meetups: []
          }
          commit('SET_USER', newUser)
        }
      )
      .catch(
        error => {
          commit('SET_LOADING', false)
          commit('SET_ERROR', error)
        }
      )
  },
  clearError ({ commit }) {
    commit('CLEAR_ERROR')
  }
}

const getters = {
  getMeetupsSorted (state) {
    return state.meetups.sort((primo, secondo) => {
      return primo.date > secondo.date
    })
  },
  getMeetupsPart (state, getters) {
    return getters.getMeetupsSorted.slice(0, 3)
  },
  getMeetupSelected (state) {
    return meetID => {
      return state.meetups.find(el => el.id === meetID)
    }
  },
  getUsers (state) {
    return state.users
  },
  getErrorState (state) {
    return state.error
  },
  getLoadingState (state) {
    return state.loading
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
