<template lang="pug">
  #app
    .columns
      .column.is-8.is-offset-2
        app-header
    .columns
      .column.is-8.is-offset-2
        router-view
</template>

<script>
  import Header from './components/header.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
