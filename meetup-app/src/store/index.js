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
  logout ({ commit }) {
    firebase.auth().signOut() // method signOut removes firebase token from localStorage
    commit('SET_USER', null)
  },
  autoSignIn ({ commit }, payload) {
    commit('SET_USER', {
      id: payload.uid,
      meetups: []
    })
  },
  loadMeetups ({ commit }) {
    commit('SET_LOADING', true)
    firebase.database().ref('meetups').once('value') // method once get a snapshot of firebase database one time only
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
            },
            creatorID: object[key].creatorID
          })
        }
        commit('SET_MEETUP', meetups)
        commit('SET_LOADING', false)
      })
      .catch(error => {
        console.log(error)
        commit('SET_LOADING', false)
      })
  },
  // CREATE NEW MEETUP
  newMeetup ({ commit, getters }, payload) {
    const meetup = {
      title: payload.name,
      location: payload.location,
      image: payload.image,
      description: payload.description,
      date: payload.date.toISOString(), // toISOString - method to convert date-object to a string; firebase can't store date like a object - only string allowed, cause firebase - one big JSON-object
      schedule: {
        ...payload.schedule
      },
      creatorID: getters.getUsers.id
    }
    // initialize id of object and url of image
    let key = null
    let path = null
    // add new object to firebase database
    firebase.database().ref('meetups').push(meetup)
      // get key from new object
      .then(data => {
        key = data.key
        return key
      })
      // add new image to firebase storage
      .then(key => {
        const fileName = payload.image.name
        const ext = fileName.slice(fileName.lastIndexOf('.'))
        return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
      })
      // update existing object in firebase database
      .then(fileInfo => {
        path = fileInfo.metadata.downloadURLs[0]
        return firebase.database().ref('meetups').child(key).update({ path: path })
      })
      // add new object to locale store
      .then(() => {
        commit('NEW_MEETUP', {
          ...meetup,
          path: path,
          id: key
        })
      })
      // catch error
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
    return (meetID) => {
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
