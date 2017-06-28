<template lang="pug">
  .output
    header.output__header
      h4.output__title.text-uppercase
        | финальная <strong>стоимость</strong>
    main.output__main
      p.output__value {{ sum | locate }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'output',
    computed: {
      ...mapGetters({
        sum: 'getSum'
      })
    },
    filters: {
      locate (value) {
        return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .output

    &__header
      padding 2rem 0
      background-color #f6e95f

    &__main
      height 150px
      display flex
      justify-content center
      align-items center

    &__value
      font-size 4rem

</style>
