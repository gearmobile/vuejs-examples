<template lang="pug">
  #app.container
    .row
      .col-md-8.col-md-2
        app-nav
    .row
      .col-md-8.col-md-2
        router-view
</template>

<script>
  import appNav from './components/navigation.vue'

  export default {
    name: 'app',
    components: {
      appNav
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
