<template lang="pug">
  .col-md-6.text-center
    .text-center.well.input__row
      button.btn.btn-default( @click="onRemove()" ) -
      input.form-control.text-center( type="text", :name="point.name", v-model="point.value" )
      button.btn.btn-default( @click="onAdd()" ) +
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'input',
    props: {
      point: {
        type: Object,
        default: null
      }
    },
    methods: {
      ...mapActions({
        orderAdd: 'addOrder',
        orderDelete: 'deleteOrder'
      }),
      onAdd () {
        const order = {
          name: this.point.name,
          price: this.point.price,
          value: this.point.value,
          time: this.point.time
        }
        this.orderAdd(order)
      },
      onRemove () {
        const order = {
          name: this.point.name,
          price: this.point.price,
          value: this.point.value,
          time: this.point.time
        }
        this.orderDelete(order)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input {

    &__row {
      display: flex;
    }
  }
</style>
