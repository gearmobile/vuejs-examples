<template lang="pug">
  .secondo
    header.secondo__header
      h4.secondo__title
        | добавим <strong>дополнительные</strong> услуги?
    main.secondo__main
      .col-md-6.secondo__card( v-for="(service, index) in services", :class="{ 'secondo__card--active': status === service.name }", :key="index", @click="onSelect(service)" )
        .secondo__tile {{ service.title }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'secondo',
    computed: {
      ...mapGetters({
        services: 'getServices',
        status: 'getServicesStatus'
      })
    },
    methods: {
      ...mapActions({
        getPrice: 'getServicePrice',
        setStatus: 'setServiceStatus'
      }),
      onSelect (obj) {
        this.getPrice(obj)
        this.setStatus(obj)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .secondo

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

    &__tile
      cursor pointer
      font-size 30px
      display flex
      justify-content center
      align-items center
      color #828282
      line-height 8rem

</style>
