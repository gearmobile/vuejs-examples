<template lang="pug">
  .primo
    header.primo__header
      h4.primo__title
        | сколько будет <strong>длиться</strong> фотосессия?
    main.primo__main
      .col-md-6.primo__card( v-for="(period, index) in periods", :class="{ 'primo__card--active': status === period.name }", :key="index", @click="onSelect(period)" )
        .primo__value {{ period.value }}
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
        periods: 'getPeriods',
        status: 'getPeriodStatus'
      })
    },
    methods: {
      ...mapActions({
        getPrice: 'getTimePrice',
        setStatus: 'setTimeStatus'
      }),
      onSelect (object) {
        this.getPrice(object)
        this.setStatus(object)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .primo

    &__header
      background-color #f6e95f
      margin-bottom .6rem

    &__title
      line-height 8.4rem
      text-transform uppercase

    &__card
      background-color #ebebeb
      border-bottom .4rem solid #fff

      &:nth-child(2n+1)
        border-right .4rem solid #fff
      
      &:hover
      &--active
        background-color #e4e4e4
        & .primo__value
          color #333

    &__value
      cursor pointer
      font-size 30px
      display flex
      justify-content center
      align-items center
      color #828282
      line-height 8rem

</style>
