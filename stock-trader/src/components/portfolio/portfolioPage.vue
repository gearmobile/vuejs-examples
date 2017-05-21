<template lang="pug">
  .row
    .col-md-12
      .well.well-lg Total Funds: ${{ funds }}
    stock-card( v-for="(item, index) in stocks", :key="index", :stockPortfolioCard="item" )
</template>

<script>
  import stockCard from './portfolioCard'
  import { mapGetters } from 'vuex'

  export default {
    name: 'portfolioPage',
    computed: {
      ...mapGetters({
        stocks: 'getPortfolioStocks',
        funds: 'getFunds'
      })
    },
    components: {
      stockCard
    }
  }
</script>

<style scoped>
  /**/
</style>
