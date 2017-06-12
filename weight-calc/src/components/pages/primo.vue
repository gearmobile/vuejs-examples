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
            p Толщина листа, {{ thickness }}мм
          .auto
            q-range( min="10", max="50", step="1", label, class="teal", v-model="thickness" )
        .row
          .auto
            p Внешний диаметр, {{ diameter.outer }}мм
          .auto
            q-range( min="10", max="500", step="1", label, class="teal", v-model="diameter.outer" )
        .row
          .auto
            p Внутренний диаметр, {{ diameter.inner }}мм
          .auto
            q-range( min="10", max="500", step="1", label, class="teal", v-model="diameter.inner" )
        .row
          .auto
            p Масса блина, {{ weight | toWeight }}
          .auto
            button.primary( @click="onCalc()" ) calculate

</template>

<script>
  const MASSA = 7.9
  export default {
    data () {
      return {
        thickness: 20,
        weight: null,
        diameter: {
          outer: 200,
          inner: 10
        }
      }
    },
    methods: {
      onCalc () {
        const volumeOuter = Math.PI * Math.pow((this.diameter.outer / 2), 2) * this.thickness
        const volumeInner = Math.PI * Math.pow((this.diameter.inner / 2), 2) * this.thickness
        const result = (volumeOuter - volumeInner) * MASSA
        this.weight = result
      }
    }
  }
</script>

<style>
</style>
