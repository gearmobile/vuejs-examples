<template lang="pug">
  #primo.notification.is-success
    p {{ msg }}
    p current count is : {{ count }}
</template>

<script>
  export default {
    name: 'primo',
    data () {
      return {
        msg: 'component primo'
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
