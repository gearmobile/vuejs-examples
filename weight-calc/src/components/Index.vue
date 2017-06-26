<template lang="pug">
  q-layout

    // header
    .toolbar.primary( slot="header" )
      q-toolbar-title Weight Сalculate

    // navigation
    q-tabs.justified( slot='navigation' )
      q-tab( route='/primo', icon="donut_small", exact, replace ) Круглый блин
      q-tab( route='/secondo', icon='dashboard', replace ) Квадратный блин


    .layout-view
      .layout-padding
        p Таблички для расчета веса самодельных блинов
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
