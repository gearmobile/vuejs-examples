import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
  meetups: [
    {
      id: '1',
      path: '../assets/prague.png',
      title: 'Meetup in Prague',
      date: '2017-07-11'
    },
    {
      id: '2',
      path: '../assets/warsaw.png',
      title: 'Meetup in Warsaw',
      date: '2017-07-12'
    },
    {
      id: '3',
      path: '../assets/budapest.jpg',
      title: 'Meetup in Budapest',
      date: '2017-07-13'
    },
    {
      id: '4',
      path: '../assets/berlin.jpg',
      title: 'Meetup in Berlin',
      date: '2017-07-01'
    }
  ],
  user: {
    id: '',
    meetups: []
  }
}

const mutations = {
  'NEW_MEETUP' (state, payload) {
    const meetup = _.pick(payload, _.keys(payload))
    meetup.id = _.toString(_.toNumber(_.max(_.map(state.meetups, 'id'))) + 1)
    state.meetups.push(meetup)
  }
}

const actions = {
  newMeetup ({ commit }, payload) {
    commit('NEW_MEETUP', payload)
  }
}

const getters = {
  getMeetups (state) {
    return state.meetups.sort((meetupA, meetupB) => {
      return meetupA.date > meetupB.date
    })
  },
  sortedMeetups (state, getters) {
    return getters.getMeetups.slice(0, 5)
  },
  getMeetup (state) {
    return id => {
      return state.meetups.find(el => {
        return el.id === id
      })
    }
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
