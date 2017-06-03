<template lang="pug">
  .row
    .col-md-4
      h4 Размеры
      form.well
        .form-group
          label( for="height" ) Высота
          input.form-control( type="text", id="height", v-model="valueHeight" )
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
      .well( style="height: 600px" )
        vue-ver-slider.vertical-slider( ref="sliderVer", direction="vertical", height="300", width="3", min="1000", max="1650", interval="10", v-model="valueHeight" )
        vue-hor-slider.horizontal-slider( ref="sliderHor", tooltip-dir="bottom", min="400", max="1400", interval="10", height="3", width="90%", v-model="valueWidth" )
</template>

<script>
  import vueSlider from 'vue-slider-component'

  export default {
    name: 'single-window',
    data () {
      return {
        valueWidth: 1400,
        valueHeight: 1650
      }
    },
    components: {
      vueHorSlider: vueSlider,
      vueVerSlider: vueSlider
    }
  }
</script>

<style lang="scss" scoped>
  .vertical-slider {
    display: inline-block;
    height: 300px;
    margin-left: 5%;
  }
  .horizontal-slider {
    margin-left: 8%;
  }
</style>
