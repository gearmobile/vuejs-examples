<template lang="pug">
  q-layout

    // tabs
    q-tabs( slot="navigation" )
      q-tab( icon="home", route="/" ) Home


    // page content
    .layout-view
      .layout-padding
      
</template>

<script>
  export default {
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="stylus">
  //
</style>
