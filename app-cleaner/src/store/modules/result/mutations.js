export default {
  'ADD_ORDER' (state, payload) {
    const record = state.order.find(element => element.name === payload.name)
    if (record) {
      record.quantity += payload.step
    } else {
      const order = {
        name: payload.name,
        price: payload.price,
        time: payload.time,
        title: payload.title,
        quantity: payload.step,
        singular: payload.singular,
        plural: payload.plural,
        few: payload.few
      }
      state.order.push(order)
    }
  },
  'DELETE_ORDER' (state, payload) {
    const record = state.order.find(element => element.name === payload.name)
    if (record.quantity > payload.step) {
      record.quantity -= payload.step
    } else {
      state.order.splice(state.order.indexOf(payload), 1)
    }
  },
  'SET_DISCOUNT' (state, payload) {
    state.discount = payload
  },
  'SET_PROMOCODE' (state, payload) {
    state.promocode = payload
  },
  'SET_DISCOUNT_STATUS' (state, payload) {
    state.discountStatus = payload.flag ? payload.name : null
    for (let i = 0; i < state.discount.length; i += 1) {
      if (state.discount[i].name !== payload.name) {
        state.discount[i].flag = true
      }
    }
  },
  'SET_PROMO_VALUE' (state, payload) {
    state.promocode.value = payload
    if (parseInt(state.promocode.value) === state.promocode.check) {
      state.promocode.status = true
      state.promocode.error = false
    } else {
      state.promocode.error = true
    }
  }
}
