<template lang="pug">
  .output
    header.output__header
      | ФИНАЛЬНАЯ <strong>СТОИМОСТЬ</strong>
    main.output__main
      | {{ sum }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'output',
    computed: {
      ...mapGetters({
        sum: 'getSum'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .output

    &__header
      padding 2rem 0
      background-color #f6e95f
</style>
