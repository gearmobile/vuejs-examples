<template lang="pug">
  .primo
    header.primo__header
      | СКОЛЬКО БУДЕТ <strong>ДЛИТЬСЯ</strong> ФОТОСЕССИЯ?
    main.primo__main
      .primo__tile.col-md-6( v-for="(period, index) in periods", :key="index", @click="onSelect(period.price)" ) {{ period.value }}
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

    &__tile
      cursor pointer
      font-size 30px
      display flex
      justify-content center
      align-items center
      background-color #ebebeb
      color #828282
      line-height 80px

      &:hover
      &--active
        color #333
        background-color #e4e4e4

</style>
