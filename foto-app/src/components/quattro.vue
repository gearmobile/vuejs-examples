<template lang="pug">
  .quattro
    header.quattro__header
      h4.quattro__title
        | индивидуальное <strong>поздравление</strong>
      h5.quattro__subtitle
        | (мы обязательно напишем его на сертификате)
    main.quattro__main
      .quattro__card
        textarea.form-control( rows="6", v-model.trim="value", @input="onInput($event.target.value)", required )
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

    &__title
    &__subtitle
      text-transform uppercase

    &__card
      margin-bottom 1rem

</style>
