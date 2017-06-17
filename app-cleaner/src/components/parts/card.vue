<template lang="pug">
  .card.col-md-3
    .well.card__wrapper
      h6 {{ card.title }}
      .card__item
        button.btn.btn-default( type="button" ) -
        input.form-control.text-center( type="text", v-model="card.value" )
        button.btn.btn-default( type="button", @click="addOrder()" ) +
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
    methods: {
      ...mapActions({
        orderAdd: 'addOrder',
        orderDelete: 'deleteOrder'
      }),
      addOrder () {
        const order = {
          name: this.card.name,
          price: this.card.price,
          value: this.card.value,
          time: this.card.time,
          title: this.card.title
        }
        this.orderAdd(order)
      },
      removeOrder () {
        const order = {
          name: this.card.name,
          price: this.card.price,
          value: this.card.value,
          time: this.card.time,
          title: this.card.title
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

