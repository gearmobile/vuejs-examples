// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.filter('singleDivider', (value) => {
  return value ? value / 1000 : null
})

Vue.filter('doubleDivider', (value) => {
  return value ? value / 100000 : null
})

Vue.filter('roundDown', (value) => {
  return value ? Math.round(value) : null
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
