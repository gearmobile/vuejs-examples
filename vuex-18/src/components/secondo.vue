<template lang="pug">
  .message.is-danger
    .message-header
      h2.title.is-5 {{ title }}
    .message-body
      p.title.is-5 {{ state }}
      .notification.is-primary
        .field.is-grouped
          .control
            a.button.is-outlined( @click="up(2)" ) to large by 2
          .control
            a.button.is-outlined( @click="down(4)" ) to small by 4
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'secondo',
    data () {
      return {
        title: 'Vuex - Complex Start'
      }
    },
    computed: {
      ...mapGetters({
        state: 'delayOutput'
      })
    },
    methods: {
      ...mapActions({
        up: 'more',
        down: 'less'
      })
    }
  }
</script>

<style scoped>
  /**/
</style>
