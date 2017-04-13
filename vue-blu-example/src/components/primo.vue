<template lang="pug">
  #primo.notification.is-success
    h1 {{ msg }}
    p current count is : {{ count }}
</template>

<script>
  export default {
    name: 'primo',
    data () {
      return {
        msg: 'initial state'
      }
    },
    computed: {
      count () {
        return this.$store.state.counter
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
