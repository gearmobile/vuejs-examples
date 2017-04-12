<template lang="pug">
  #app
    .columns
      .column.is-12
        h1.app__header vuex learning
    .columns
      .column.is-12
        appPrimo
    .columns
      .column.is-12
        appSecondo
</template>

<script>
  import Primo from './components/primo'
  import Secondo from './components/secondo'

  export default {
    name: 'app',
    components: {
      appPrimo: Primo,
      appSecondo: Secondo
    }
  }
</script>

<style>
  #app {
    margin: 20px;
  }
  .app__header {
    text-transform: capitalize;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
  }
</style>
