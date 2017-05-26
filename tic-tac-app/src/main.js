// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// https://scotch.io/tutorials/building-a-tic-tac-toe-game-with-vue-2-part-1#toc-setup
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// const eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App }
}).$mount('#app')
