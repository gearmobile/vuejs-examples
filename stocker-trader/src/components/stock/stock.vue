<template lang="pug">
  #stock
    stock-card( v-for="(stock, index) in stocks", :key="index", :stock="stock", @buyStock="" )
</template>

<script>
  import stockCard from './stockComponent.vue'

  export default {
    name: 'stock',
    components: {
      stockCard
    },
    computed: {
      stocks () {
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
