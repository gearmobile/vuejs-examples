<template lang="pug">
  .columns
    .column.is-12
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

<style>
  /**/
</style>
