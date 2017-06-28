<template lang="pug">
  .tetro
    header.tetro__header
      h3.text-uppercase
        | формат <strong>сертификата</strong>
    main.tetro__main
      .tetro__card( v-for="(certificate, index) in certificates", :key="index", @click="onSelect(certificate.price)" )
        .tetro__tile {{ certificate.title }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'tetro',
    computed: {
      ...mapGetters({
        certificates: 'getCertificate'
      })
    },
    methods: {
      ...mapActions({
        getPrice: 'getCertificatePrice'
      }),
      onSelect (price) {
        this.getPrice(price)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .tetro

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
