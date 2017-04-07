<template lang="pug">
  .input-group
    span.input-group-btn
      button.btn.btn-default( type="button" ) translate!
    input.form-control( type="text", placeholder="Input word to translate" )
</template>

<script>
  export default {
    name: 'input',
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
