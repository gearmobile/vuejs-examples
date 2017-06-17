<template lang="pug">
  .col-md-6.text-center
    .text-center.well.input__row
      button.btn.btn-default( @click="onRemove()", :disabled="decreaseState" ) -
      input.form-control.text-center( type="text", :name="point.name", v-model="output" )
      button.btn.btn-default( @click="onAdd()", :disabled="increaseState" ) +
</template>

<script>
  import { mapActions } from 'vuex'
  import Mixins from '../../mixins/mixin.js'

  export default {
    name: 'input',
    mixins: [Mixins],
    props: {
      point: {
        type: Object,
        default: null
      }
    },
    computed: {
      increaseState () {
        return this.point.value === this.point.max || !Number.isInteger(this.point.value)
      },
      decreaseState () {
        return this.point.value === this.point.min || !Number.isInteger(this.point.value)
      },
      output: {
        get () {
          return this.point.value + ' ' + this.getNoun(this.point.value, this.point.singular, this.point.few, this.point.plural)
        }
      }
    },
    methods: {
      ...mapActions({
        orderAdd: 'addOrder',
        orderDelete: 'deleteOrder'
      }),
      increase () {
        this.point.value += this.point.step
      },
      decrease () {
        if (this.point.value === this.point.min) {
          return
        }
        this.point.value -= this.point.step
      },
      onAdd () {
        this.increase()
        const order = {
          name: this.point.name,
          price: this.point.price,
          time: this.point.time,
          title: this.point.title,
          quantity: this.point.step
        }
        this.orderAdd(order)
      },
      onRemove () {
        this.decrease()
        const order = {
          name: this.point.name,
          price: this.point.price,
          time: this.point.time,
          title: this.point.title,
          quantity: this.point.step
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
