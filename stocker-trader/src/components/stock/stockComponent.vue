<template lang="pug">
  .col-sm-6.col-md-4
    .panel.panel-default
      .panel-heading
        h3.panel-title
          | {{ stock.name }}
          = ' '
          small (Price: {{ stock.price }})
      .panel-body
        .pull-left
          input.form-control( type="number", placeholder="Quantity", v-model.trim.number="quantity" )
        .pull-right
          button.btn.btn-default( type="button", @click="onClick()", :disabled="isDisable" ) buy
</template>

<script>
export default {
  name: 'stockComponent',
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    onClick () {
      const order = {
        orderID: this.stock.id,
        orderPrice: this.stock.price,
        orderQuantity: this.quantity
      }
      this.$emit('buyStock', order)
    }
  },
  computed: {
    isDisable () {
      return this.quantity <= 0 || !Number.isInteger(this.quantity)
    }
  }
}
</script>

<style lang="scss" scoped>
  //
</style>
