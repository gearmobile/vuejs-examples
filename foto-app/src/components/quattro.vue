<template lang="pug">
  .quattro
    header.quattro__header
      h3.quattro__caption.text-uppercase
        | индивидуальное <strong>поздравление</strong>
      h4.quattro__subcaption.text-uppercase
        | (мы обязательно напишем его на сертификате)
    main.quattro__main
      .quattro__card
        textarea.form-control( rows="5", v-model="value", @input="onInput($event.target.value)" )
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    name: 'quattro',
    data () {
      return {
        value: ''
      }
    },
    methods: {
      ...mapActions({
        congratulation: 'getCongratulationValue'
      }),
      onInput (value) {
        this.congratulation(value)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .quattro

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
