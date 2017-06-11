<template lang="pug">
  #single
    .form-group
      p {{ counter }}
    .form-group
      button.btn.btn-primary( type="button", @click="onUp()" ) incr
      button.btn.btn-primary( type="button", @click="onDown()" ) decr

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'singleWindow',
    data () {
      return {
        msg: 'single window'
      }
    },
    computed: {
      ...mapGetters({
        counter: 'getCount'
      })
    },
    methods: {
      ...mapActions({
        onUp: 'increase',
        onDown: 'decrease'
      })
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
