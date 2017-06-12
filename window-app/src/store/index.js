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
      height: 1200,
      width: 1000
    }
  },
  types: [
    {
      title: 'simple',
      name: 'Глухое окно'
    },
    {
      title: 'turn',
      name: 'Поворотное окно'
    },
    {
      title: 'tilt',
      name: 'Поворотно-откидное окно'
    }
  ],
  profiles: [
    {
      title: 'Стандарт',
      details: {
        type: 'Rehau Blitz',
        packet: '32мм, 2 камеры',
        formula: '4x10x4x10x4',
        furnitura: 'Siegenia-Aubi, Favorit',
        color: 'белый',
        sealer: 'черный'
      },
      price: {
        profile: 1000,
        furnitura: 500,
        packet: 500
      },
      preview: './assets/doggy-01.jpg',
      show: true
    },
    {
      title: 'Комфорт',
      details: {
        type: 'Rehau Delight',
        packet: '32мм, 2 камеры',
        formula: '4x10x4x10x4',
        furnitura: 'Siegenia-Aubi, Favorit',
        color: 'белый',
        sealer: 'черный'
      },
      price: {
        profile: 1100,
        furnitura: 600,
        packet: 600
      },
      preview: './assets/doggy-02.jpg',
      show: false
    },
    {
      title: 'Премиум',
      details: {
        type: 'Rehau Brilliant',
        packet: '32мм, 2 камеры',
        formula: '4x10x4x10x4',
        furnitura: 'Siegenia-Aubi, Favorit',
        color: 'белый',
        sealer: 'черный'
      },
      price: {
        profile: 1200,
        furnitura: 700,
        packet: 700
      },
      preview: './assets/doggy-04.jpg',
      show: false
    },
    {
      title: 'Эксклюзив',
      details: {
        type: 'Rehau Geneo',
        packet: '32мм, 2 камеры',
        formula: '4x10x4x10x4',
        furnitura: 'Siegenia-Aubi, Favorit',
        color: 'белый',
        sealer: 'черный'
      },
      price: {
        profile: 1300,
        furnitura: 800,
        packet: 800
      },
      preview: './assets/doggy-05.jpg',
      show: false
    }
  ],
  additions: {
    montage: {
      price: 386
    },
    slope: {
      price: 193
    },
    sill: {
      price: 1191
    }
  },
  output: {
    area: null,
    profile: {
      total: null,
      outer: null,
      inner: null
    },
    cost: {
      window: null,
      work: null,
      total: null,
      additional: null
    }
  },
  checked: {
    window: 'tilt',
    profile: 'Стандарт',
    additions: []
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
  },
  windowTypes (state) {
    return state.types
  },
  windowPreview (state) {
    let path = null
    switch (state.checked.window) {
      case 'simple':
        path = './assets/doggy-01.jpg'
        break
      case 'turn':
        path = './assets/doggy-02.jpg'
        break
      case 'tilt':
        path = './assets/doggy-04.jpg'
        break
      default:
        path = './assets/doggy-04.jpg'
    }
    return path
  },
  getProfiles (state) {
    return state.profiles
  },
  montageCost (state) {
    return (((state.singleWindow.sizes.height + state.singleWindow.sizes.width) * 2) / 1000) * state.additions.montage.price
  },
  sillCost (state) {
    return (state.singleWindow.sizes.width / 1000) * state.additions.sill.price
  },
  slopeCost (state) {
    return ((state.singleWindow.sizes.height * 2 + state.singleWindow.sizes.width) / 1000) * state.additions.slope.price
  }
}

const mutations = {
  'UPDATE_HEIGHT' (state, payload) {
    state.singleWindow.sizes.height = payload
  },
  'UPDATE_WIDTH' (state, payload) {
    state.singleWindow.sizes.width = payload
  },
  'UPDATE_WINDOW_TYPE' (state, payload) {
    state.checked.window = payload
  },
  'UPDATE_WINDOW_PROFILE' (state, payload) {
    state.checked.profile = payload
  },
  'UPDATE_ADDITIONS' (state, payload) {
    state.checked.additions = payload
  }
}

const actions = {
  updateHeight ({ commit }, payload) {
    commit('UPDATE_HEIGHT', payload)
  },
  updateWidth ({ commit }, payload) {
    commit('UPDATE_WIDTH', payload)
  },
  updateWindowType ({ commit }, payload) {
    commit('UPDATE_WINDOW_TYPE', payload)
  },
  updateWindowProfile ({ commit }, payload) {
    commit('UPDATE_WINDOW_PROFILE', payload)
  },
  updateAdditions ({ commit }, payload) {
    commit('UPDATE_ADDITIONS', payload)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
