<template lang="pug">
  .primo
    header.primo__header
      | СКОЛЬКО БУДЕТ <strong>ДЛИТЬСЯ</strong> ФОТОСЕССИЯ?
    main.primo__main
      .primo__tile.col-md-6.col-xs-6.col-sm-3( v-for="(period, index) in periods", :key="index", @click="onSelect(period)" ) {{ period.time }}
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
        periods: 'getPeriod'
      })
    },
    methods: {
      ...mapActions({
        timeGet: 'getTime'
      }),
      onSelect (order) {
        this.timeGet(order)
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
        color #333
        background-color #e4e4e4

</style>
