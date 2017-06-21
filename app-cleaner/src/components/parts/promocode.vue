<template lang="pug">
  .row.well.promocode
    .promocode__row
      input.form-control#value( type="text" )
      button.btn.btn-default( type="button", @click="onPromo()", :disabled="promocode.disabled" )
        | Применить
    p.promocode__error( v-if="promocode.error" )
      | Вы ввели неправильный промокод
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'promocode',
    props: {
      promocode: {
        type: Object,
        default: null
      }
    },
    computed: {
      ...mapGetters({
        promoValue: 'getPromoValue'
      })
      // code: {
      //   get () { return this.promoValue }
      //   // set (value) { this.promoValueSet(value) }
      // }
    },
    methods: {
      ...mapActions({
        promoValueSet: 'setPromoValue'
      }),
      onPromo () {
        const value = document.getElementById('value').value
        this.promoValueSet(value)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .promocode {
    width: 80%;
    margin-left: 10%;
    margin-top: 40px;

    &__row {
      display: flex;
    }

    &__error {
      color: red;
      margin-top: 10px;
      margin-bottom: 0;
      font-style: italic;
    }
  }
  
</style>
