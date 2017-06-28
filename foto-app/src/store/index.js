import Vue from 'vue'
import Vuex from 'vuex'

// https://fotorabbit.com.ua/fotosessiya-v-podarok/

Vue.use(Vuex)

const state = {
  status: {
    time: 'period1',
    service: 'service1',
    certificate: 'certificate1',
    delivery: 'delivery1'
  },
  periods: [
    {
      name: 'period1',
      value: 1,
      price: 1300
    },
    {
      name: 'period2',
      value: 1.5,
      price: 1900
    },
    {
      name: 'period3',
      value: 2,
      price: 2400
    },
    {
      name: 'period4',
      value: 3,
      price: 3500
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
      title: 'Доставка в отделение почты',
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
  //
  'SET_TIME_STATUS' (state, payload) {
    state.status.time = payload.name
  },
  'SET_TIME_PRICE' (state, payload) {
    state.order.time = payload.price
  },
  // SERVICE SECTION
  'SET_SERVICE_STATUS' (state, payload) {
    state.status.service = payload.name
  },
  'SET_SERVICE_PRICE' (state, payload) {
    state.order.service = payload.price
  },
  // CERTIFICATE SECTION
  'SET_CERTIFICATE_STATUS' (state, payload) {
    state.status.certificate = payload.name
  },
  'SET_CERTIFICATE_PRICE' (state, payload) {
    state.order.certificate = payload.price
  },
  // CONGRATULATIONS SECTION
  'SET_CONGRATULATIONS_VALUE' (state, payload) {
    state.order.congratulation = payload
  },
  // DELIVERY SECTION
  'SET_DELIVERY_STATUS' (state, payload) {
    state.status.delivery = payload.name
  },
  'SET_DELIVERY_PRICE' (state, payload) {
    state.order.delivery = payload.price
  },
  // CUSTOMER SECTION
  'SET_CUSTOMER_DETAILS' (state, payload) {
    state.order.customer.name = payload.name
    state.order.customer.phone = payload.phone
    state.order.customer.email = payload.email
  }
}

const actions = {
  // TIME SECTION
  setTimeStatus ({ commit }, payload) {
    commit('SET_TIME_STATUS', payload)
  },
  getTimePrice ({ commit }, payload) {
    commit('SET_TIME_PRICE', payload)
  },
  // SERVICE SECTION
  setServiceStatus ({ commit }, payload) {
    commit('SET_SERVICE_STATUS', payload)
  },
  getServicePrice ({ commit }, payload) {
    commit('SET_SERVICE_PRICE', payload)
  },
  // CERTIFICATE SECTION
  setCertificateStatus ({ commit }, payload) {
    commit('SET_CERTIFICATE_STATUS', payload)
  },
  getCertificatePrice ({ commit }, payload) {
    commit('SET_CERTIFICATE_PRICE', payload)
  },
  // CONGRATULATIONS SECTION
  getCongratulationValue ({ commit }, payload) {
    commit('SET_CONGRATULATIONS_VALUE', payload)
  },
  // DELIVERY SECTION
  setDeliveryStatus ({ commit }, payload) {
    commit('SET_DELIVERY_STATUS', payload)
  },
  getDeliveryPrice ({ commit }, payload) {
    commit('SET_DELIVERY_PRICE', payload)
  },
  //
  getCustomerDetails ({ commit }, payload) {
    commit('SET_CUSTOMER_DETAILS', payload)
  }
}

const getters = {
  //
  getPeriodStatus (state) {
    return state.status.time
  },
  getPeriods (state) {
    return state.periods
  },
  // SERVICE SECTION
  getServicesStatus (state) {
    return state.status.service
  },
  getServices (state) {
    return state.services
  },
  // CERTIFICATE SECTION
  getCertificateStatus (state) {
    return state.status.certificate
  },
  getCertificate (state) {
    return state.certificate
  },
  // DELIVERY SECTION
  getDeliveryStatus (state) {
    return state.status.delivery
  },
  getDelivery (state) {
    return state.delivery
  },
  //
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
