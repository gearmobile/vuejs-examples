<template lang="pug">
  section.action( v-if="showActionBlock" )
    .text-center.well.action__panel
      | Только до #[strong {{ getDate }}] помоем #[strong {{ getQuantity }}] окон за #[strong {{ getSum }}]
    .text-center.well.action__input
      button.btn.btn-default( @click="decreaseWindow", :disabled="windowStateDecrease" ) -
      input.form-control.text-center( type="text", v-model="getWindowValue" )
      button.btn.btn-default( @click="increaseWindow", :disabled="windowStateIncrease" ) +
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'action',
    computed: {
      ...mapGetters([
        'getWindowValue',
        'windowStateDecrease',
        'windowStateIncrease',
        'getDate',
        'getQuantity',
        'getSum',
        'showActionBlock'
      ])
    },
    methods: {
      ...mapActions([
        'increaseWindow',
        'decreaseWindow'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .action {

    &__panel {
      background-color: #f6d9dd;
      color: #950d2a;
    }

    &__input {
      display: flex;
    }
  }
</style>
