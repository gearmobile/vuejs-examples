<template lang="pug">
  .row
    .col-md-4
      h4 Размеры
      form.well
        .form-group
          label( for="height" ) Высота, мм
          input.form-control( type="text", id="height", v-model="valueHeight" )
        .form-group
          label( for="width" ) Ширина, мм
          input.form-control( type="text", id="width", v-model="valueWidth" )
      h4 Дополнительно
      form.well.add
        .checkbox
          div.add__item
            label
              input( type="checkbox" )
              | Монтаж
          div.add__item
            label
              input( type="checkbox" )
              | Подоконник
          div.add__item
            label
              input( type="checkbox" )
              | Откосы
    .col-md-8
      h3 Тип открывания окна
      .well.open
        app-type
        vue-ver-slider.vertical-slider( ref="sliderVer", direction="vertical", height=300, width=3, min=1000, max=1650, interval=10, v-model="valueHeight" )
        vue-hor-slider.horizontal-slider( ref="sliderHor", tooltip-dir="bottom", min=400, max=1400, interval=10, height=3, width='90%', v-model="valueWidth" )
</template>

<script>
  import vueSlider from 'vue-slider-component'
  import TypeWindow from './type-window.vue'

  export default {
    name: 'single-window',
    data () {
      return {
        valueWidth: 1400,
        valueHeight: 1650,
        price: 3116
      }
    },
    components: {
      vueHorSlider: vueSlider,
      vueVerSlider: vueSlider,
      appType: TypeWindow
    },
    computed: {
      result () {
        return ((this.valueHeight * this.valueWidth) / 1000000) * this.price
      }
    }
  }
</script>

<style lang="scss" scoped>
  .add__item {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .open {
    position: relative;
  }
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
  .vertical-slider {
    display: inline-block;
    height: 300px;
    margin-left: 5%;
  }
  .horizontal-slider {
    margin-left: 8%;
  }
</style>
