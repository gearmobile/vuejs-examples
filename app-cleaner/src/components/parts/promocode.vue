<template lang="pug">
  .row.well.promocode
    .promocode__row
      input.form-control( type="text", v-model="code" )
      button.btn.btn-default( type="button", @click="onPromo()", :disabled="promoStatus" )
        | Применить
    p.promocode__error( v-if="promoError" )
      | Вы ввели неправильный промокод
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'promocode',
    data () {
      return {
        code: null
      }
    },
    props: {
      promocode: {
        type: Object,
        default: null
      }
    },
    computed: {
      ...mapGetters({
        promoValue: 'getPromoValue',
        promoStatus: 'getPromoStatus',
        promoError: 'getPromoError'
      })
    },
    methods: {
      ...mapActions({
        promoValueSet: 'setPromoValue'
      }),
      onPromo () {
        this.promoValueSet(this.code)
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
