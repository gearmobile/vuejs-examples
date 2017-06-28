<template lang="pug">
  .primo
    header.primo__header
      h4.text-uppercase
        | сколько будет <strong>длиться</strong> фотосессия?
    main.primo__main
      .col-md-6.primo__card( v-for="(period, index) in periods", :key="index", @click="onSelect(period.price)" )
        .primo__tile {{ period.value }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'primo',
    data () {
      return {
        msg: 'primo'
      }
    },
    computed: {
      ...mapGetters({
        periods: 'getPeriods'
      })
    },
    methods: {
      ...mapActions({
        getPrice: 'getTimePrice'
      }),
      onSelect (price) {
        this.getPrice(price)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .primo

    &__header
      background-color #f6e95f
      padding 2rem 0
      margin-bottom .6rem

    &__card
      background-color #ebebeb
      border-bottom .4rem solid #fff

      &:nth-child(2n+1)
        border-right .4rem solid #fff
      
      &:hover
        background-color #e4e4e4

    &__tile
      cursor pointer
      font-size 30px
      display flex
      justify-content center
      align-items center
      color #828282
      line-height 80px

      &:hover
      &--active
        color #333

</style>
