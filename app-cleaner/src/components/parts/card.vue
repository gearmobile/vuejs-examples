<template lang="pug">
  .card.col-md-3
    .well.text-center
      h6 {{ card.title }}
      .card__item
        button.btn.btn-default( type="button" ) -
        input.form-control.text-center( type="text", v-model="card.value" )
        button.btn.btn-default( type="button" ) +
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
        //
      })
    }
  }
</script>

<style lang="scss" scoped>
  .card {

    &__item {
      display: flex;
    }
  }
</style>

