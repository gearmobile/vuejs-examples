<template lang="pug">
  #error
    .well
      h3 {{ value }}
</template>

<script>
  export default {
    name: 'error',
    data () {
      return {
        value: 'error'
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
