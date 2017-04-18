<template lang="pug">
  #app
    appPrimo
</template>

<script>
  import Primo from './components/primo.vue'

  export default {
    name: 'app',
    components: {
      appPrimo: Primo
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
