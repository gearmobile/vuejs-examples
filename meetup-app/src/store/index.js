import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  meetups: [
    {
      id: 1,
      // path: 'http://cdni.condenast.co.uk/1920x1280/a_c/Charles-Bridge-and-the-Vltava-River-Prague-Czech-Republic-conde-nast-traveller-26oct16-rex.jpg',
      path: '../assets/prague.png',
      title: 'Meetup in Prague',
      date: '2017-07-11'
    },
    {
      id: 2,
      // path: 'https://valholl-prd.s3.amazonaws.com/images/warsaw_sumar2017_facebook.width-1200.png',
      path: '../assets/warsaw.png',
      title: 'Meetup in Warsaw',
      date: '2017-07-12'
    },
    {
      id: 3,
      // path: 'https://a1.odistatic.net/images/landingpages/vacation/1920x800/budapest_1920x800.jpg',
      path: '../assets/budapest.jpg',
      title: 'Meetup in Budapest',
      date: '2017-07-13'
    },
    {
      id: 4,
      // path: 'https://berlin.grand.hyatt.com/content/dam/PropertyWebsites/grandhyatt/bergh/Media/All/Grand-Hyatt-Berlin-P608-Skyline.masthead-feature-pane-medium.jpg',
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

const mutations = {}

const actions = {}

const getters = {
  getMeetups (state) {
    return state.meetups.sort((meetupA, meetupB) => {
      return meetupA.date > meetupB.date
    })
  },
  sortedMeetups (state, getters) {
    return getters.getMeetups.slice(0, 5)
  },
  // getMeetup (state, payload) {
  //   return state.meetups.find(el => {
  //     return el.id === payload
  //   })
  // }
  getMeetup (state) {
    return (value) => {
      return state.meetups.find(el => {
        return el.id === value.toString()
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
