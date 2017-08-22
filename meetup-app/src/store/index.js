import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  meetups: [
    {
      id: '1',
      path: 'http://via.placeholder.com/800x400',
      title: 'title one',
      date: '11-March-2017',
      description: 'Lorem ipsum dolor sit amet, ei hendrerit constituto dissentias vim. Usu doctus facilisi torquatos cu, mel eligendi pericula eu. Quod nulla omnes ius ea, an nam sapientem persecuti disputationi, at qui partem expetendis disputando. Te volumus prodesset nam. Et sit nibh choro dicunt, an idque dicunt minimum nec. Viris possim verear ne mea.'
    },
    {
      id: '2',
      path: 'http://via.placeholder.com/800x400',
      title: 'title two',
      date: '27-March-2017',
      description: 'Lorem ipsum dolor sit amet, ei hendrerit constituto dissentias vim. Usu doctus facilisi torquatos cu, mel eligendi pericula eu. Quod nulla omnes ius ea, an nam sapientem persecuti disputationi, at qui partem expetendis disputando. Te volumus prodesset nam. Et sit nibh choro dicunt, an idque dicunt minimum nec. Viris possim verear ne mea.'
    },
    {
      id: '3',
      path: 'http://via.placeholder.com/800x400',
      title: 'title three',
      date: '03-March-2017',
      description: 'Lorem ipsum dolor sit amet, ei hendrerit constituto dissentias vim. Usu doctus facilisi torquatos cu, mel eligendi pericula eu. Quod nulla omnes ius ea, an nam sapientem persecuti disputationi, at qui partem expetendis disputando. Te volumus prodesset nam. Et sit nibh choro dicunt, an idque dicunt minimum nec. Viris possim verear ne mea.'
    }
  ]
}

const mutations = {
  //
}

const actions = {
  //
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
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
