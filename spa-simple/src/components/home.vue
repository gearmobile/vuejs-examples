<template lang="pug">
  #home
    p {{ msg }}
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Simple SPA'
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
