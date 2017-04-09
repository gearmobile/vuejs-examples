<template lang="pug">
  .primo
    p {{ $store.state.count }}
    p {{ evenOdd  }}
    .btn-group( role="group" )
      button.btn.btn-default( type="button", @click="increment" ) incerment
      button.btn.btn-default( type="button", @click="decrement" ) decrement
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'primo',
    data () {
      return {
        // count: this.$store.state.count
      }
    },
    computed: mapGetters([
      'evenOdd'
    ]),
    methods: mapMutations([
      'increment',
      'decrement'
    ])
  }
</script>

<style lang="scss" scoped>
  //
</style>
