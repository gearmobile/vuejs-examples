<template lang="pug">
  .cinque
    header.cinque__header
      h3.text-uppercase
        | как сертификат <strong>попадет</strong> к вам?
    main.cinque__main
      .cinque__card( v-for="(point, index) in points", :key="index", @click="onSelect(point.price)" )
        .cinque__tile {{ point.title }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'cinque',
    computed: {
      ...mapGetters({
        points: 'getDelivery'
      })
    },
    methods: {
      ...mapActions({
        getPrice: 'getDeliveryPrice'
      }),
      onSelect (price) {
        this.getPrice(price)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .cinque

    &__header
      background-color #f6e95f
      padding 2rem 0
      margin-bottom .6rem

    &__card
      margin-bottom 1rem

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
