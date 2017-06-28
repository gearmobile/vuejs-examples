import Vue from 'vue'
import Vuex from 'vuex'

// https://fotorabbit.com.ua/fotosessiya-v-podarok/

Vue.use(Vuex)

const state = {
  periods: [
    {
      name: 'period1',
      value: 1,
      price: 1200
    },
    {
      name: 'period2',
      value: 1.5,
      price: 1300
    },
    {
      name: 'period3',
      value: 2,
      price: 1400
    },
    {
      name: 'period4',
      value: 3,
      price: 1500
    }
  ],
  services: [
    {
      name: 'service1',
      title: 'макияж',
      price: 200
    },
    {
      name: 'service2',
      title: 'аренда платья',
      price: 300
    },
    {
      name: 'service3',
      title: 'прическа',
      price: 400
    },
    {
      name: 'service4',
      title: 'хаски',
      price: 500
    }
  ],
  certificate: [
    {
      name: 'certificate1',
      title: 'желтый кролик',
      price: 1000
    },
    {
      name: 'certificate2',
      title: 'классика в рамочке',
      price: 1200
    }
  ],
  delivery: [
    {
      name: 'delivery1',
      title: 'Самовывоз',
      price: 500
    },
    {
      name: 'delivery2',
      title: 'Доставка в отделение Почты',
      price: 600
    }
  ],
  order: {
    time: 0,
    service: 0,
    certificate: 0,
    congratulation: '',
    delivery: 0,
    customer: {
      name: null,
      phone: null,
      enail: null
    }
  }
}

const mutations = {
  'SET_TIME_PRICE' (state, payload) {
    state.order.time = payload
  },
  'SET_SERVICE_PRICE' (state, payload) {
    state.order.service = payload
  },
  'SET_CERTIFICATE_PRICE' (state, payload) {
    state.order.certificate = payload
  },
  'SET_CONGRATULATIONS_VALUE' (state, payload) {
    state.order.congratulation = payload
  },
  'SET_DELIVERY_PRICE' (state, payload) {
    state.order.delivery = payload
  },
  'SET_CUSTOMER_DETAILS' (state, payload) {
    state.order.customer.name = payload.name
    state.order.customer.phone = payload.phone
    state.order.customer.email = payload.email
  }
}

const actions = {
  getTimePrice ({ commit }, payload) {
    commit('SET_TIME_PRICE', payload)
  },
  getServicePrice ({ commit }, payload) {
    commit('SET_SERVICE_PRICE', payload)
  },
  getCertificatePrice ({ commit }, payload) {
    commit('SET_CERTIFICATE_PRICE', payload)
  },
  getCongratulationValue ({ commit }, payload) {
    commit('SET_CONGRATULATIONS_VALUE', payload)
  },
  getDeliveryPrice ({ commit }, payload) {
    commit('SET_DELIVERY_PRICE', payload)
  },
  getCustomerDetails ({ commit }, payload) {
    commit('SET_CUSTOMER_DETAILS', payload)
  }
}

const getters = {
  getPeriods (state) {
    return state.periods
  },
  getServices (state) {
    return state.services
  },
  getCertificate (state) {
    return state.certificate
  },
  getDelivery (state) {
    return state.delivery
  },
  getSum (state) {
    return state.order.time + state.order.service + state.order.certificate + state.order.delivery
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
