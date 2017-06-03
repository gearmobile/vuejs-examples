<template lang="pug">
  #app.container
    .row
      .col-md-12
        app-nav
    .row
      .col-md-12
        router-view
</template>

<script>
  import Navigation from './components/navigation.vue'

  export default {
    name: 'app',
    components: {
      appNav: Navigation
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
