<template lang="pug">
  article.message.is-info
    .message-header
      p.title.is-5.has-text-centered {{ msg }} - {{ value }}
    .message-body
      .control
        a.button.is-outlined.is-info( @click="actionIncrease" ) action increase
      .control
        a.button.is-outlined.is-info( @click="actionDecrease" ) action decrease
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'tetro',
    data () {
      return {
        msg: 'action state'
      }
    },
    computed: {
      value () {
        return this.$store.state.counter
      }
    },
    methods: mapActions({
      actionIncrease: 'actIncrease',
      actionDecrease: 'actDecrease'
    })
  }
</script>

<style lang="scss" scoped>
  //
</style>
