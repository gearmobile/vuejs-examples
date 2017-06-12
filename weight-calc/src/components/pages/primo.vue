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
            p Табличка для расчета массы круглого блина для гантели (можно и штанги)
            p Подбирать массу блина с помощью значений "Толщина листа", "Внешний диаметр", "Внутренний диаметр".
            p Просто подставлять значения в этих ячейках и смотреть результат в "Масса блина".
        .row
          .auto
            p Толщина листа: {{ input.list.value }}мм
          .auto
            q-range( :min="input.list.min", :max="input.list.max", :step="input.list.step", :value="input.list.value", v-model="input.list.value", label, class="primary" )
        .row
          .auto
            p Внешний диаметр: {{ input.diameter.outer.value }}мм
          .auto
            q-range( :min="input.diameter.outer.min", :max="input.diameter.outer.max", :step="input.diameter.outer.step", :value="input.diameter.outer.value", v-model="input.diameter.outer.value", label, class="teal" )
        .row
          .auto
            p Внутренний диаметр: {{ input.diameter.inner.value }}мм
          .auto
            q-range( :min="input.diameter.inner.min", :max="input.diameter.inner.max", :step="input.diameter.inner.step", :value="input.diameter.inner.value", v-model="input.diameter.inner.value", label, class="teal" )
        .row
          .auto
            p Масса блина: {{ output.weight | Round }}
          .auto
            button.primary( @click="onCalc()" ) calculate

</template>

<script>
  export default {
    data () {
      return {
        input: {
          list: {
            min: 10,
            max: 50,
            step: 1,
            value: 20
          },
          diameter: {
            outer: {
              min: 30,
              max: 500,
              step: 1,
              value: 200
            },
            inner: {
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
        const volumeOuter = Math.PI * Math.pow((this.input.diameter.outer.value / 2), 2) * this.input.list.value
        const volumeInner = Math.PI * Math.pow((this.input.diameter.inner.value / 2), 2) * this.input.list.value
        const result = (volumeOuter - volumeInner) * this.output.solidity
        this.output.weight = result
      }
    }
  }
</script>

<style>
</style>
