<template lang="pug">
  #app
    .columns
      .column.is-12
        appPrimo
    .columns
      .column.is-12
        appSecondo
    .columns
      .column.is-12
        appTetro
</template>

<script>
  import Primo from './components/primo.vue'
  import Secondo from './components/secondo.vue'
  import Tetro from './components/tetro.vue'

  export default {
    name: 'app',
    components: {
      appPrimo: Primo,
      appSecondo: Secondo,
      appTetro: Tetro
    }
  }
</script>

<style>
  /**/
</style>
