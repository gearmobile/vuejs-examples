export default {
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
  getDiscount (state) {
    return state.discount
  },
  getDiscountStatus (state) {
    return state.discountStatus
  },
  showDiscount (state) {
    return !!state.discountStatus
  }
}
