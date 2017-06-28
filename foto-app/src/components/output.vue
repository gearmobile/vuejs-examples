<template lang="pug">
  .output
    header.output__header
      | ФИНАЛЬНАЯ <strong>СТОИМОСТЬ</strong>
    main.output__main
      //- {{ sum }}
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
  .output

    &__header
      padding 2rem 0
      background-color #f6e95f
</style>
