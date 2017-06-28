<template lang="pug">
  .cinque
    header.cinque__header
      h4.cinque__title
        | как сертификат <strong>попадет</strong> к вам?
    main.cinque__main
      .cinque__card( v-for="(point, index) in points", :class="{ 'cinque__card--active': status === point.name }", :key="index", @click="onSelect(point)" )
        .cinque__value {{ point.title }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'cinque',
    computed: {
      ...mapGetters({
        points: 'getDelivery',
        status: 'getDeliveryStatus'
      })
    },
    methods: {
      ...mapActions({
        getPrice: 'getDeliveryPrice',
        setStatus: 'setDeliveryStatus'
      }),
      onSelect (obj) {
        this.getPrice(obj)
        this.setStatus(obj)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .cinque

    &__header
      background-color #f6e95f
      margin-bottom .6rem

    &__title
      line-height 8.4rem
      text-transform uppercase

    &__card
      background-color #ebebeb
      margin-bottom 1rem

      &:hover
      &--active
        background-color #e4e4e4

        & .cinque__value
          color #333

    &__value
      cursor pointer
      font-size 26px
      display flex
      justify-content center
      align-items center
      color #828282
      line-height 8rem
        
</style>
