<template lang="pug">
  #stock
    stock-card( v-for="(stock, index) in stocks", :key="index", :stock="stock", @buyStock="" )
</template>

<script>
  import stockCard from './stockComponent.vue'

  export default {
    name: 'stock',
    data () {
      return {
        stocks: [
          { id: 1, name: 'Google', price: 100 },
          { id: 2, name: 'Apple', price: 200 },
          { id: 3, name: 'Oracle', price: 300 },
          { id: 4, name: 'Microsoft', price: 400 }
        ]
      }
    },
    components: {
      stockCard
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
