<template lang="pug">
  #dashboard
    h3.text-capitalize.page-header dashboard events
    button.btn.btn-danger.btn-sm.text-capitalize( type="button", @click="signOut()" ) sign out
    p {{ $store.state }}
</template>

<script>
  import { firebaseApp } from '../data/firebase.js'

  export default {
    name: 'dashboard',
    methods: {
      signOut () {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
