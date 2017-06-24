
export default {
  // ГРЯЗНАЯ СУММА
  getResult (state) {
    const total = state.order.reduce((sum, c) => sum + c.quantity * c.price, 0)
    return total
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
  showCommon (state) {
    return !state.discountStatus
  }
}
