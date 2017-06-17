<template lang="pug">
  .card.col-md-3
    .well.card__wrapper
      h6 {{ card.title }}
      .card__item
        button.btn.btn-default( type="button", @click="removeOrder()", :disabled="decreaseState" ) -
        input.form-control.text-center( type="text", v-model="card.value" )
        button.btn.btn-default( type="button", @click="addOrder()", :disabled="increaseState" ) +
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'card',
    props: {
      card: {
        type: Object,
        default: null
      }
    },
    computed: {
      increaseState () {
        return this.card.value === this.card.max || !Number.isInteger(this.card.value)
      },
      decreaseState () {
        return this.card.value === this.card.min || !Number.isInteger(this.card.value)
      }
    },
    methods: {
      ...mapActions({
        orderAdd: 'addOrder',
        orderDelete: 'deleteOrder'
      }),
      increase () {
        this.card.value += this.card.step
      },
      decrease () {
        if (this.card.value === this.card.min) {
          return
        }
        this.card.value -= this.card.step
      },
      addOrder () {
        this.increase()
        const order = {
          name: this.card.name,
          price: this.card.price,
          time: this.card.time,
          title: this.card.title,
          quantity: this.card.step
        }
        this.orderAdd(order)
      },
      removeOrder () {
        this.decrease()
        const order = {
          name: this.card.name,
          price: this.card.price,
          time: this.card.time,
          title: this.card.title,
          quantity: this.card.step
        }
        this.orderDelete(order)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    text-align: center;
    
    &__wrapper {
      min-height: 160px;
    }

    &__item {
      display: flex;
    }
  }
</style>

