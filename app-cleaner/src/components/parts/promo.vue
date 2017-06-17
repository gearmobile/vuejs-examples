<template lang="pug">
  .promo
    .well.promo__panel
      | Только до #[strong 31 июля] помоем #[strong пять] окон за #[strong 1 000 рублей]
    .well.promo__input
      button.btn.btn-default( type="button", @click="removeOrder()", :disabled="decreaseState" ) -
      input.form-control.text-center.promo__data( type="text", v-model="output", disabled )
      button.btn.btn-default( type="button", @click="addOrder()", :disabled="increaseState" ) +
</template>

<script>
  import { mapActions } from 'vuex'
  import mixins from '../../mixins/mixin.js'

  export default {
    name: 'promo',
    mixins: [mixins],
    props: {
      promo: {
        type: Object,
        default: null
      }
    },
    computed: {
      increaseState () {
        return this.promo.value === this.promo.max || !Number.isInteger(this.promo.value)
      },
      decreaseState () {
        return this.promo.value === this.promo.min || !Number.isInteger(this.promo.value)
      },
      output: {
        get () {
          return this.promo.value + ' ' + this.getNoun(this.promo.value, this.promo.singular, this.promo.few, this.promo.plural)
        }
      }
    },
    methods: {
      ...mapActions({
        orderAdd: 'addOrder',
        orderDelete: 'deleteOrder'
      }),
      increase () {
        this.promo.value += this.promo.step
      },
      decrease () {
        if (this.promo.value === this.promo.min) {
          return
        }
        this.promo.value -= this.promo.step
      },
      addOrder () {
        this.increase()
        const order = {
          name: this.promo.name,
          price: this.promo.price,
          time: this.promo.time,
          title: this.promo.title,
          quantity: this.promo.step
        }
        this.orderAdd(order)
      },
      removeOrder () {
        this.decrease()
        const order = {
          name: this.promo.name,
          price: this.promo.price,
          time: this.promo.time,
          title: this.promo.title,
          quantity: this.promo.step
        }
        this.orderDelete(order)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .promo {
    text-align: center;
    width: 100%;

    &__panel {
      background-color: #f6d9dd;
      color: #950d2a;
      font-size: 22px;
      border-color: lighten(#950d2a, 55%);
    }

    &__input {
      display: flex;
    }

    &__data {
      color: #950d2a;
    }
  }
  
</style>

