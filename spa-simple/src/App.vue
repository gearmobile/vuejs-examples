<template lang="pug">
  #app
    .row
      .col-md-12
        app-nav
    .row
      .col-md-12
        <router-view></router-view>
</template>

<script>
  import Nav from './components/navigation.vue'

  export default {
    name: 'app',
    components: {
      appNav: Nav
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
