<template lang="pug">
  #secondo.notification.is-warning
    h1 {{ msg }}
    .field.is-grouped
      .control
        a.button.is-outlined increase counter
      .control
        a.button.is-outlined decrease counter
</template>

<script>
  export default {
    name: 'secondo',
    data () {
      return {
        msg: 'getter state'
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
