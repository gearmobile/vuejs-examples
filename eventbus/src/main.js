// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// http://bulma.io/documentation/overview/start/
// https://chenz24.github.io/vue-blu/#/

import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'bulma'

Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app')
