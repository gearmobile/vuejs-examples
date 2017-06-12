<template lang="pug">
  
  q-layout

    // header
    .toolbar( slot="navigation" )
      q-toolbar-title Weight calculate

    // navigation
    q-tabs( slot='navigation' )
      q-tab( route='/', exact, replace ) Home

    .layout-view
      .layout-padding
        p secondo

</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
