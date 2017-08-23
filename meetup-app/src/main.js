// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from './store'
import filterDate from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', filterDate)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: {App}
}).$mount('#app')
