<template lang="pug">
  v-card
    v-card-text
      | {{msg}}
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'four'
    }
  }
}
</script>

<style lang="stylus" scoped>
  //
</style>
