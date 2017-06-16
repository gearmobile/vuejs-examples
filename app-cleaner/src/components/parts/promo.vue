<template lang="pug">
  .promo
    .well.promo__panel
      | Только до #[strong 31 июля] помоем #[strong пять] окон за #[strong 1 000 рублей]
    .well.promo__input
      button.btn.btn-default() -
      input.form-control.text-center( type="text" )
      button.btn.btn-default() +
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'promo',
    props: {
      promo: {
        type: Object,
        default: null
      }
    },
    methods: {
      ...mapActions({
        //
      })
    }
  }
</script>

<style lang="scss" scoped>

  .promo {
    text-align: center;

    &__panel {
      background-color: #f6d9dd;
      color: #950d2a;
    }

    &__input {
      display: flex;
    }
  }
  
</style>

