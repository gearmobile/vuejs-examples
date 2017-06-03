<template lang="pug">
  .row
    .col-md-4
      h4 Размеры
      form.well
        .form-group
          label( for="height" ) Высота
          input.form-control( type="text", id="height" )
        .form-group
          label( for="width" ) Ширина
          input.form-control( type="text", id="width", v-model="valueWidth" )
      h4 Дополнительно
      form.well
        .checkbox
          div
            label
              input( type="checkbox" )
              | Монтаж
          div
            label
              input( type="checkbox" )
              | Подоконник
          div
            label
              input( type="checkbox" )
              | Откосы
    .col-md-8
      h3 Тип открывания окна
      .well
        vue-slider( ref="sliderHor", v-model="valueWidth" )
        //- input( type="range", :min="singleHorMin", :max="singleHorMax", v-model="width", step="10" )
</template>

<script>
  import vueSlider from 'vue-slider-component'
  export default {
    name: 'single-window',
    data () {
      return {
        valueWidth: 0,
        tooltip: false,
        direction: 'vertical'
      }
    },
    components: {
      vueSlider
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
