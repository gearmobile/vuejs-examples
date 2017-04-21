// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueBlu from 'vue-blu'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/router'
import '../node_modules/vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueAxios, Axios, VueBlu)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')
