<template lang="pug">
  .row
    stock-card( v-for="(stock, index) in stocks", :key="index", :stockPortfolioCard="stock" )
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
