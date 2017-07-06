<template lang="pug">
  v-app
    v-container
      v-layout( row )

        v-flex.text-xs-center.mb-4( xs6, offset-xs3 )
          h2.display-2
            | рассчитайте займ под залог автомобиля прямо сейчас!
          p
            | выберите стоимость автомобиля

      v-layout
        v-flex( xs12 )
          v-slider.px-4( :min="cost.min", :max="cost.max", v-model="cost.value" )


      v-layout( row )
        v-flex.text-xs-right.blue.darken-1.white--text( xs4 )
          h4.white--text.mb-0
            | автоломбард
          p.mb-0
            | машина остается на нашей стоянке
        v-flex.red.darken-1( xs4, style="display: flex; align-items: center; justify-content: center" )
          h4.text-xs-center.white--text.mb-0
            | программа
        v-flex.text-xs-left.green.darken-1( xs4 )
          h4.white--text.mb-0
            | автозалог
          p.mb-0.white--text
            | вы оставляете нам только ПТС
            br
            | автомобиль остается у вас

      v-layout( row )
        v-flex.text-xs-right.blue.darken-2.white--text( xs4, style="display: flex; align-items: center; justify-content: flex-end;" )
          p.mb-0
            | {{ sum1 | currency }}
        v-flex.red.darken-2( xs4, style="display: flex; align-items: center; justify-content: center" )
          h5.text-xs-center.white--text.mb-0.py-3
            | сумма займа
        v-flex.text-xs-left.green.darken-2( xs4, style="display: flex; align-items: center" )
          p.mb-0.white--text
            | {{ sum2 | currency }}

      v-layout( row )
        v-flex.text-xs-right.blue.darken-3.white--text( xs4, style="display: flex; align-items: center; justify-content: flex-end;" )
          p.mb-0
            | {{ pawnshop.percent | percent }}
        v-flex.red.darken-3( xs4, style="display: flex; align-items: center; justify-content: center" )
          h5.text-xs-center.white--text.mb-0.py-3
            | процентная ставка
        v-flex.text-xs-left.green.darken-3( xs4, style="display: flex; align-items: center" )
          p.mb-0.white--text
            | {{ zalog.percent | percent }}

      v-layout( row )
        v-flex.text-xs-right.blue.darken-4.white--text( xs4, style="display: flex; align-items: center; justify-content: flex-end;" )
          p.mb-0
            | {{ payment1 | currency }}
        v-flex.red.darken-4( xs4, style="display: flex; align-items: center; justify-content: center" )
          h5.text-xs-center.white--text.mb-0.py-3
            | ежемесячный платеж
        v-flex.text-xs-left.green.darken-4( xs4, style="display: flex; align-items: center" )
          p.mb-0.white--text
            | {{ payment2 | currency }}

      


</template>

<script>
  export default {
    name: 'main',
    filters: {
      percent (value) {
        return value + '%'
      },
      currency (value) {
        if (value === null) {
          return
        }
        return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
      }
    },
    data () {
      return {
        cost: {
          min: 400000,
          max: 5000000,
          value: 1400000
        },
        pawnshop: {
          sum: 0.7,
          percent: 2
        },
        zalog: {
          sum: 0.9,
          percent: 4
        }
      }
    },
    computed: {
      sum1 () {
        return this.cost.value * this.pawnshop.sum
      },
      sum2 () {
        return this.cost.value * this.zalog.sum
      },
      payment1 () {
        return this.sum1 * (this.pawnshop.percent / 100)
      },
      payment2 () {
        return this.sum2 * (this.zalog.percent / 100)
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
