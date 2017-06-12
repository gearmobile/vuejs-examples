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
        .row
          .auto
            h5.text-center Табличка для расчета массы квадратного блина для гантели (можно и штанги)
            p.text-center То есть, вместо круга (как обычно) для гантели можно применять и квадраты. Конечно, вид и удобство использования будет не то, но вдруг кому понадобиться.
            p.text-center Подбирать массу блина с помощью значений "Толщина листа", "Ширина листа", "Внутренний диаметр".
        .row
          .auto
            p Толщина листовой заготовки: #[strong {{ input.list.thickness.value }}мм]
          .auto
            q-range( class="primary", :min="input.list.thickness.min", :max="input.list.thickness.max", :step="input.list.thickness.step", :value="input.list.thickness.value", v-model="input.list.thickness.value", @click="onCalc()", label )
        .row
          .auto
            p Ширина квадратного блина: #[strong {{ input.list.width.value }}мм]
          .auto
            q-range( class="teal", :min="input.list.width.min", :max="input.list.width.max", :step="input.list.width.step", :value="input.list.width.value", v-model="input.list.width.value", @click="onCalc()", label )
        .row
          .auto
            p Высота квадратного блина: #[strong {{ input.list.height.value }}мм]
          .auto
            q-range( class="teal", :min="input.list.height.min", :max="input.list.height.max", :step="input.list.height.step", :value="input.list.height.value", v-model="input.list.height.value", label )
        .row
          .auto
            p Внутренний диаметр блина: #[strong {{ input.list.diameter.value }}мм]
          .auto
            q-range( class="secondary", :min="input.list.diameter.min", :max="input.list.diameter.max", :step="input.list.diameter.step", :value="input.list.diameter.value", v-model="input.list.diameter.value", @click="onCalc()", label )
        .row
          .auto
            p Масса блина: #[strong {{ output.weight | Round }}]

</template>

<script>
  export default {
    data () {
      return {
        input: {
          list: {
            thickness: {
              min: 10,
              max: 50,
              step: 1,
              value: 20
            },
            width: {
              min: 50,
              max: 500,
              step: 1,
              value: 100
            },
            height: {
              min: 50,
              max: 500,
              step: 1,
              value: 100
            },
            diameter: {
              min: 26,
              max: 30,
              step: 1,
              value: 28
            }
          }
        },
        output: {
          weight: null,
          solidity: 7.85
        }
      }
    },
    methods: {
      onCalc () {
        const volumeSquare = (this.input.list.width.value * this.input.list.height.value) * this.input.list.thickness.value
        const volumeCylinder = Math.PI * Math.pow((this.input.list.diameter.value / 2) * 2) * this.input.list.thickness.value
        const result = (volumeSquare - volumeCylinder) * this.output.solidity
        this.output.weight = result
      }
    }
  }
</script>

<style>
</style>
