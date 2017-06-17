// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false

Vue.filter('addPercent', value => value + '%')
Vue.filter('locate', value => {
  if (value === null) {
    return
  }
  return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
})
Vue.filter('time', value => {
  let result = null
  switch (value) {
    case 0:
      result = 0
      break
    case 30:
      result = 30
      break
    case 60:
      result = 1
      break
    case 90:
      result = 1.5
      break
    case 120:
      result = 2
      break
    case 150:
      result = 2.5
      break
    case 180:
      result = 3
      break
    default:
      result = 0
  }
  return result
})

/* eslint-disable no-new */
new Vue({
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
