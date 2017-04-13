<template lang="pug">
  article.message.is-warning
    .message-header
      h1.title.is-5 {{ title }}
    .message-body
      p {{ state }}
    .message-body.is-danger
      .field
        .control
          a.button.is-warning( @click="onLarge" ) make count large
        .control
          a.button.is-danger( @click="onSmall" ) make count small
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'primo',
    data () {
      return {
        title: 'Vuex - Simple Start'
      }
    },
    computed: {
      ...mapGetters({
        state: 'output'
      })
    },
    methods: {
      ...mapActions({
        onLarge: 'increase',
        onSmall: 'decrease'
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
