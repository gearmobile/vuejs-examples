<template lang="pug">
  .col-md-4
    .panel.panel-default
      .panel-heading
        h3.panel-title #[strong {{ stockPortfolioCard.name }}]
          = ' '
          small ( Price: ${{ stockPortfolioCard.price }} )
          p.pull-right #[strong Total Summ:] ${{ stockPortfolioCard.price * stockPortfolioCard.quantity }}
      .panel-body
        form.form-inline
          .form-group
            input.form-control( type='number', placeholder='Quantity', v-model.trim.number="stockPortfolioCard.quantity" )
          button.btn.btn-default.pull-right( type='button', @click="onSell()" ) Sell
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'portfolioCard',
    props: {
      stockPortfolioCard: {
        type: Object,
        default: null
      }
    },
    methods: {
      ...mapActions({
        sellStock: 'sellStocks'
      }),
      onSell () {
        const record = {
          name: this.stockPortfolioCard.name,
          price: this.stockPortfolioCard.price,
          quantity: this.stockPortfolioCard.quantity
        }
        this.sellStock(record)
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
