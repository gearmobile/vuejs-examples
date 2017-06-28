<template lang="pug">
  .tetro
    header.tetro__header
      h4.tetro__title
        | формат <strong>сертификата</strong>
    main.tetro__main
      .tetro__card( v-for="(certificate, index) in certificates", :class="{ 'tetro__card--active': status === certificate.name }", :key="index", @click="onSelect(certificate)" )
        .tetro__value {{ certificate.title }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'tetro',
    computed: {
      ...mapGetters({
        certificates: 'getCertificate',
        status: 'getCertificateStatus'
      })
    },
    methods: {
      ...mapActions({
        getPrice: 'getCertificatePrice',
        setStatus: 'setCertificateStatus'
      }),
      onSelect (obj) {
        this.getPrice(obj)
        this.setStatus(obj)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .tetro

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
        & .tetro__value
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
