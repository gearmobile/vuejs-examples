import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

const state = {
  meetups: [],
  users: null,
  loading: false,
  error: null
}

const mutations = {
  'SET_MEETUP' (state, payload) {
    state.meetups = payload
  },
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
  autoSignIn ({ commit }, payload) {
    commit('SET_USER', {
      id: payload.uid,
      meetups: []
    })
  },
  loadMeetups ({ commit }) {
    commit('SET_LOADING', true)
    firebase.database().ref('meetups').once('value') // method onc get a snapshot of firebase database
      .then(data => {
        const meetups = []
        const object = data.val()
        for (let key in object) {
          meetups.push({
            id: key,
            title: object[key].title,
            description: object[key].description,
            path: object[key].path,
            date: object[key].date,
            location: object[key].location,
            schedule: {
              date: object[key].schedule.date,
              time: object[key].schedule.time
            }
          })
        }
        commit('SET_MEETUP', meetups)
        commit('SET_LOADING', false)
      })
      .catch(error => {
        console.log(error)
        commit('SET_LOADING', true)
      })
  },
  newMeetup ({ commit }, payload) {
    const meetup = {
      title: payload.name,
      location: payload.location,
      path: payload.image,
      description: payload.description,
      date: payload.date.toISOString(), // toISOString - method to convert date-object to a string; firebase can't store date like a object - only string allowed, cause firebase - one big JSON-object
      schedule: {
        ...payload.schedule
      }
    }
    firebase.database().ref('meetups').push(meetup)
      .then(data => {
        commit('NEW_MEETUP', {
          ...meetup,
          id: data.key
        })
      })
      .catch(error => {
        console.log(error)
      })
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
