<template lang="pug">
  .container
    .row
      .col-md-12
        app-check
</template>

<script>
  import Check from './components/check'

  export default {
    name: 'pronounce',
    components: {
      appCheck: Check
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
