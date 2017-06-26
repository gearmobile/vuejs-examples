<template lang="pug">
  
  q-layout

    // header
    .toolbar( slot="navigation" )
      q-toolbar-title Weight Сalculate

    // navigation
    q-tabs.justified( slot='navigation' )
      q-tab( route='/', icon='home', exact, replace ) Home

    .layout-view
      .layout-padding
        .row
          .auto
            h5.text-center.primo-title Табличка для расчета массы круглого блина для гантели (можно и штанги)
        
        .card
          .card-title.bg-secondary.text-white.text-center
            | Подбирать массу блина с помощью значений "Толщина листа", "Внешний диаметр", "Внутренний диаметр"
          .card-content
            .row
              .auto
                p Толщина листа: #[strong {{ input.list.value }}мм]
              .auto
                q-range( :min="input.list.min", :max="input.list.max", :step="input.list.step", :value="input.list.value", v-model="input.list.value", label, class="primary", @input="onCalc()" )
            .row
              .auto
                p Внешний диаметр: #[strong {{ input.diameter.outer.value }}мм]
              .auto
                q-range( :min="input.diameter.outer.min", :max="input.diameter.outer.max", :step="input.diameter.outer.step", :value="input.diameter.outer.value", v-model="input.diameter.outer.value", label, class="secondary", @input="onCalc()" )
            .row
              .auto
                p Внутренний диаметр: #[strong {{ input.diameter.inner.value }}мм]
              .auto
                q-range( :min="input.diameter.inner.min", :max="input.diameter.inner.max", :step="input.diameter.inner.step", :value="input.diameter.inner.value", v-model="input.diameter.inner.value", label, class="tertiary", @input="onCalc()" )
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
    },
    created () {
      this.onCalc()
    }
  }
</script>

<style lang="stylus" scoped>
  
  .primo-title
    margin-bottom: 30px

</style>
