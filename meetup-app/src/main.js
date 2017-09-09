// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  components: {App},
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDQXaORNY_j1FKihu3WSzseKXjaGT5Y3G0',
      authDomain: 'meetup-app-530c6.firebaseapp.com',
      databaseURL: 'https://meetup-app-530c6.firebaseio.com',
      projectId: 'meetup-app-530c6',
      storageBucket: 'gs://meetup-app-530c6.appspot.com' // ссылка на storage в firebase
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
