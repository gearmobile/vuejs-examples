
export default {
  // ГРЯЗНАЯ СУММА
  getResult (state) {
    const total = state.order.reduce((sum, c) => sum + c.quantity * c.price, 0)
    return total
  },
  // СУММА ПРОМОКОДА
  getPromoSum (state, getters) {
    let total = getters.getResult
    if (state.promocode.status) {
      const promo = total - total * state.promocode.percent / 100
      return promo
    }
  },
  // СУММА СКИДКИ
  getDiscountSum (state, getters) {
    const total = getters.getResult
    for (let i = 0; i < state.discount.length; i += 1) {
      if (state.discount[i].name === state.discountStatus) {
        const discount = total * state.discount[i].value / 100
        return discount
      }
    }
  },
  getTotalDiscountSum (state, getters) {
    const commonSum = getters.getResult
    const discountSum = getters.getDiscountSum
    const result = commonSum - discountSum
    return result
  },
  // ОБЩЕЕ ВРЕМЯ РАБОТЫ
  getTime (state) {
    const total = (state.order.reduce((sum, c) => sum + c.time, 0)) / 60
    return total
  },
  // ЧИСЛО СПЕЦИАЛИСТОВ
  getWorkers (state, getters) {
    const time = getters.getTime
    const worker = time > 7 ? 2 : 1
    return worker
  },
  getOrders (state) {
    return state.order
  },
  getDiscount (state) {
    return state.discount
  },
  getDiscountStatus (state) {
    return state.discountStatus
  },
  showCommon (state) {
    return !state.discountStatus
  },
  showDiscount (state) {
    return !!state.discountStatus
  },
  // получить данные для промокода
  getPromocode (state) {
    return state.promocode
  },
  // получить статус промокода - активирован промокод или не активирован
  getPromoStatus (state) {
    return state.promocode.status
  },
  // получить ошибку активации промокода
  getPromoError (state) {
    return state.promocode.error
  }
}
