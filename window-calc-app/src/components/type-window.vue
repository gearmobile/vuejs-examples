<template lang="pug">
  //- .well.open
  .type.well
    .checkbox
      div.type__item
        label
          input( type="checkbox" )
          | Глухое
      div.type__item
        label
          input( type="checkbox" )
          | Поворотное
      div.type__item
        label
          input( type="checkbox" )
          | Поворотно-откидное
</template>

<script>
  // import vueSlider from 'vue-slider-component'

  export default {
    name: 'type-window'
  }
</script>

<style lang="scss" scoped>
  // .open {
  //   position: relative;
  // }
  .type {
    position: absolute;
    top: 10%;
    left: 15%;

    &__item {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
