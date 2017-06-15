<template lang="pug">
  #app.container
    // ORDER SECTION
    .row
      .col-md-10.col-md-offset-1
        app-order
</template>

<script>
  import Order from './components/order.vue'

  export default {
    name: 'app',
    components: {
      appOrder: Order
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
