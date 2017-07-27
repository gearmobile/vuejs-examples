<template lang="pug">
  v-container
    v-layout( rwo, wrap )
      v-flex.text-sm-right( xs12, sm6 )
        v-btn.info( large, router, to="/meetup" )
          | explore meetups
      v-flex.text-sm-left( xs12, sm6 )
        v-btn.info( large, router, to="/meetup/new" )
          | organize meetup
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
