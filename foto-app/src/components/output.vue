<template lang="pug">
  .output
    p {{ msg }}
</template>

<script>
  export default {
    name: 'output',
    data () {
      return {
        msg: 'output'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
