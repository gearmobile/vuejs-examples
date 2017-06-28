<template lang="pug">
  .secondo
    header.secondo__header
      h3.secondo__title.text-uppercase
        | добавим <strong>дополнительные</strong> услуги?
    main.secondo__main
      .secondo__card( v-for="(service, index) in services", :key="index", @click="onSelect(service.price)" )
        .secondo__tile {{ service.title }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'secondo',
    computed: {
      ...mapGetters({
        services: 'getServices'
      })
    },
    methods: {
      ...mapActions({
        getPrice: 'getServicePrice'
      }),
      onSelect (price) {
        this.getPrice(price)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .secondo

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
