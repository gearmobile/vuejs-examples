<template lang="pug">
  #primo
    .well
      h3 {{ value }}
      h4 primo - {{ state }}
</template>

<script>
  import eventBus from '../config/eventbus.js'

  export default {
    name: 'primo',
    data () {
      return {
        value: 'component primo',
        state: ''
      }
    },
    created () {
      eventBus.$on('sendValue', data => {
        this.state = data
      })
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
