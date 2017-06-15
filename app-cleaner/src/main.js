// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.filter('addPercent', value => value + '%')
Vue.filter('locate', value => {
  if (value === null) {
    return
  }
  return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
})

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app')
