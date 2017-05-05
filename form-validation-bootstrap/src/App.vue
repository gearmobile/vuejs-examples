<template lang="pug">
  #app.container( @click.self="hideModal" )
    .row
      .col-md-8.col-md-offset-2
        app-primo
</template>

<script>
  import Primo from './components/primo'

  export default {
    name: 'app',
    methods: {
      hideModal () {
        console.log('clocked')
      }
    },
    components: {
      appPrimo: Primo
    }
  }
</script>

<style lang="scss">
  #app {
    padding-top: 6rem;
    height: 100vh;
  }
</style>
