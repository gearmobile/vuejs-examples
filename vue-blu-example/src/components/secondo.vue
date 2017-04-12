<template lang="pug">
  #secondo.notification.is-warning
    p {{ msg }}
    .field.is-grouped
      .control
        a.button.is-outlined( @click="increase" ) increase counter
      .control
        a.button.is-outlined( @click="decrease" ) decrease counter
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'secondo',
    data () {
      return {
        msg: 'component secondo',
        increment: 1,
        decrement: -1
      }
    },
    computed: mapGetters(['increase', 'decrease'])
  }
</script>

<style scoped>
  /**/
</style>
