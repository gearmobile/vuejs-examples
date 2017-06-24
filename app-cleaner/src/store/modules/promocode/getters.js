export default {
  // СУММА ПРОМОКОДА
  getPromoSum (state, getters) {
    let total = getters.getResult
    if (state.promocode.status) {
      const promo = total - total * state.promocode.percent / 100
      return promo
    }
  },
  // ПОЛУЧИТЬ ДАННЫЕ ДЛЯ ПРОМОКОДА
  getPromocode (state) {
    return state.promocode
  },
  // ПОЛУЧИТЬ СТАТУС ПРОМОКОДА - АКТИВИРОВАН ПРОМОКОД ИЛИ НЕ АКТИВИРОВАН
  getPromoStatus (state) {
    return state.promocode.status
  },
  // ПОЛУЧИТЬ ОШИБКУ АКТИВАЦИИ ПРОМОКОДА
  getPromoError (state) {
    return state.promocode.error
  }
}
