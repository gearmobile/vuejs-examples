<template lang="pug">
  #dashboard
    h3.text-capitalize.page-header dashboard events
    button.btn.btn-danger.btn-sm.text-capitalize( type="button", @click="signOut()" ) sign out
    hr
    app-add-event
</template>

<script>
  import { firebaseApp } from '../data/firebase.js'
  import AddEvent from '../components/addEvent.vue'

  export default {
    name: 'dashboard',
    methods: {
      signOut () {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    },
    components: {
      appAddEvent: AddEvent
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
