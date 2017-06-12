<template lang="pug">
  q-layout

    // header
    .toolbar( slot="navigation" )
      q-toolbar-title Weight Сalculate

    // navigation
    q-tabs( slot='navigation' )
      q-tab( route='/primo', exact, replace ) Круглый блин
      q-tab( route='/secondo', replace ) Квадратный блин


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
