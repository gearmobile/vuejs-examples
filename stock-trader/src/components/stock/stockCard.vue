<template lang="pug">
  .col-md-6
    .panel.panel-default
      .panel-heading
        h3.panel-title #[strong {{ stockCard.name }}]
          = ' '
          small ( Price: ${{ stockCard.price }} )
      .panel-body
        form.form-inline
          .form-group
            input.form-control( type='number', placeholder='Quantity', v-model.trim.number="quantity" )
          button.btn.btn-default.pull-right( type='button', @click="onSend()", :disabled="isDisabled" ) Buy
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'stockCard',
    data () {
      return {
        quantity: null
      }
    },
    props: {
      stockCard: {
        type: Object,
        default: null
      }
    },
    computed: {
      isDisabled () {
        return this.quantity <= 0 || !Number.isInteger(this.quantity)
      }
    },
    methods: {
      ...mapActions({
        sendOrder: 'buyStocks'
      }),
      onSend () {
        const order = {
          id: this.stockCard.id,
          name: this.stockCard.name,
          price: this.stockCard.price,
          quantity: this.quantity
        }
        this.sendOrder(order)
        this.quantity = null
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
