import Vue from 'vue'
import Vuex from 'vuex'
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
  loadMeetups ({ commit }) {
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
      })
      .catch(error => {
        console.log(error)
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
