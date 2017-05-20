<template lang="pug">
  #app.container
    .row
      .col-md-10.col-md-offset-1
        app-nav
    .row
      .col-md-10.col-md-offset-1
        router-view
</template>

<script>
  import { mapActions } from 'vuex'
  import appNav from './components/navigation.vue'

  export default {
    name: 'app',
    components: {
      appNav
    },
    methods: {
      ...mapActions({
        initStock: 'initStocks'
      })
    },
    created () {
      this.initStock()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
