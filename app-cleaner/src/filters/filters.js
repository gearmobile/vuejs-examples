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
  },
  hoursAndMinutes (value) {
    function getNoun (number, singular, few, plural) {
      number = Math.abs(number)
      number %= 100
      if (number >= 5 && number <= 20) {
        return plural
      }
      number %= 10
      if (number === 1) {
        return singular
      }
      if (number >= 2 && number <= 4) {
        return few
      }
      return plural
    }

    let minutes = value % 60
    let hours = (value - minutes) / 60

    minutes = minutes < 10 ? '0' + minutes : minutes

    const resultHours = hours + ' ' + getNoun(hours, 'час', 'часа', 'часов')
    const resultMinutes = minutes + ' ' + getNoun(minutes, 'минута', 'минуты', 'минут')
    const result = resultHours + ' ' + resultMinutes
    return result
  }
}
