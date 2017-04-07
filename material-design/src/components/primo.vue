<template lang="pug">
  .primo
    md-card
      md-card-header
        .md-title {{ title }}
        .md-subhead {{ subhead }}
      md-card-content
        md-button.md-raised.md-primary( @click="onShow" ) show table
        md-button.md-raised.md-primary( @click="onHide" ) hide table
      md-table
        md-table-header
          md-table-row
</template>

<script>
  export default {
    name: 'primo',
    data () {
      return {
        title: 'Powered by Vue.js and Material Design',
        subhead: 'coded by gearmobile',
        isShow: false
      }
    },
    methods: {
      onShow () {},
      onHide () {}
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
