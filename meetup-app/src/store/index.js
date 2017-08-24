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
  users: null
}

const mutations = {
  'NEW_MEETUP' (state, payload) {
    state.meetups.push(payload)
  },
  'SET_USER' (state, payload) {
    state.users = payload
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
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            meetups: []
          }
          commit('SET_USER', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
  },
  signIn ({ commit }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            meetups: [] // ?
          }
          commit('SET_USER', newUser)
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
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
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
