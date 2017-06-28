<template lang="pug">
  .output
    header.output__header
      h4.output__title.text-uppercase
        | финальная <strong>стоимость</strong>
    main.output__main
      | {{ sum | locate }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        money: {
          decimal: ',',
          thousands: ' ',
          suffix: ' ₽',
          precision: 0,
          masked: false
        }
      }
    },
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
</style>
