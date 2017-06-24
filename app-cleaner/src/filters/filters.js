export default {
  addPercent (value) {
    return value + '%'
  },
  locate (value) {
    if (value === null) {
      return
    }
    return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
  },
  locateSmall (value) {
    if (value === null) {
      return
    }
    return value.toLocaleString('ru-RU')
  },
  time (value) {
    let result = null
    switch (value) {
      case 0:
        result = 0 + ' минут'
        break
      case 30:
        result = 30 + ' минут'
        break
      case 60:
        result = 1 + ' час'
        break
      case 90:
        result = 1.5 + ' часа'
        break
      case 120:
        result = 2 + ' часа'
        break
      case 150:
        result = 2.5 + ' часа'
        break
      case 180:
        result = 3 + ' часа'
        break
      default:
        result = 0 + ' минут'
    }
    return result
  }
}
