<template lang="pug">
  #success
    .well
      h3 {{ value }}
      ul.list-unstyled
        li( v-for="item in getData" )
          h3 post id
          p {{ item.id }}
          h4 post title
          p {{ item.title }}
</template>

<script>
  import eventBus from '../config/eventbus.js'

  export default {
    name: 'success',
    data () {
      return {
        value: 'component secondo',
        getData: {}
      }
    },
    created () {
      eventBus.$on('dataTransfer', data => {
        this.getData = data
      })
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
