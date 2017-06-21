<template lang="pug">
  .well.discount
    .col-md-6.col-md-offset-3.clearfix
      p.pull-left.discount__primo Общая сумма:
      p.pull-right.discount__primo--sum {{ common | locate }}
    .col-md-6.col-md-offset-3.clearfix
      p.pull-left.discount__secondo Сумма скидки:
      p.pull-right.discount__secondo--sum {{ discount | locate }}
    .col-md-6.col-md-offset-3.clearfix
      p.pull-left.discount__tetro Итого сумма:
      p.pull-right.discount__tetro--sum {{ total | locate }}
</template>

<script>
  import filters from '../../filters/filters.js'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        common: 'getResult',
        discount: 'getDiscountSum',
        total: 'getTotalDiscountSum'
      })
    },
    filters
  }
</script>

<style lang="scss">
  //
</style>
