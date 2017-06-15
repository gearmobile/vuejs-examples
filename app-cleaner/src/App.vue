<template lang="pug">
  
  #app.container
    
    // MAIN SECTION
    .row
      .col-md-10.col-md-offset-1
        app-main
    
    // ADDITIONAL SECTION
    .row
      .col-md-10.col-md-offset-1
        app-additional
    
    // ORDER SECTION
    .row
      .col-md-10.col-md-offset-1
        app-order
        
</template>

<script>
  import Main from './components/main.vue'
  import Additional from './components/additional.vue'
  import Order from './components/order.vue'

  export default {
    name: 'app',
    components: {
      appMain: Main,
      appAdditional: Additional,
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
    background-color: #ddd;
  }
</style>
