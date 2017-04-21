<template lang="pug">
  #about
    p.notification.is-success {{ msg }}
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        msg: 'about'
      }
    }
  }
</script>

<style lang="scss" scoped>
// 
</style>
