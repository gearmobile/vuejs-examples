<template lang="pug">
  #app
</template>

<script>
  import Firebase from 'firebase'
  const config = {
    apiKey: 'AIzaSyCCtn-Y-8cEfTjHMA-rkdbrKfQULQ4d0zE',
    authDomain: 'vue-firebase-a56dd.firebaseapp.com',
    databaseURL: 'https://vue-firebase-a56dd.firebaseio.com',
    projectId: 'vue-firebase-a56dd',
    storageBucket: 'vue-firebase-a56dd.appspot.com',
    messagingSenderId: '747876873568'
  }
  const app = Firebase.initializeApp(config)
  const db = app.database()
  console.log(db)
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
