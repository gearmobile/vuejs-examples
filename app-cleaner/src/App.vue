<template lang="pug">
  
  #app.container
    
    // MAIN SECTION
    .row
      .col-md-10.col-md-offset-1
        app-main
    
    // ORDER SECTION
    .row
      .col-md-10.col-md-offset-1
        app-order
        
</template>

<script>
  import Main from './components/main.vue'
  import Order from './components/order.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'app',
    components: {
      appMain: Main,
      appOrder: Order
    },
    methods: {
      ...mapActions({
        initItems: 'initItems',
        cardsInit: 'initCards',
        generalsInit: 'initGenerals',
        repairsInit: 'initRepairs',
        promosInit: 'initPromos',
        metroInit: 'initMetros'
      })
    },
    created () {
      this.initItems()
      this.cardsInit()
      this.generalsInit()
      this.repairsInit()
      this.promosInit()
      this.metroInit()
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
