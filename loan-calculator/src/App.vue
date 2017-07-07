<template lang="pug">
  v-app
    v-container
      v-layout( row )

        v-flex.text-xs-center.mb-4( xs8, offset-xs2 )
          h2.display-2
            | рассчитайте займ под залог автомобиля прямо сейчас!
          h5
            | выберите стоимость автомобиля

      v-layout.mb-4
        v-flex( xs12 )
          v-card
            v-card-text
              div.pt-2( style="display: flex; align-items: center;" )
                h6.mb-0( style="user-select: none;" ) {{ cost.min | currency }}
                v-slider.px-4.my-0( :min="cost.min", :max="cost.max", v-model="cost.value", hide-details )
                h6.mb-0( style="user-select: none;" ) {{ cost.max | currency }}
              div.pt-4( style="display: flex; justify-content: center;" )
                h6.mb-0( style="user-select: none;" ) {{ cost.value | currency }}

      main.elevation-6
        v-layout( row )
          v-flex.text-xs-right.blue.darken-1.white--text( xs4, style="display: flex; flex-direction: column; justify-content: center;" )
            h4.white--text.mb-0.pr-2
              | автоломбард
            p.mb-0.pr-2
              | машина остается на нашей стоянке
          v-flex.red.darken-1.py-5( xs4, style="display: flex; align-items: center; justify-content: center" )
            h4.text-xs-center.white--text.mb-0
              | программа
          v-flex.text-xs-left.green.darken-1( xs4, style="display: flex; flex-direction: column; justify-content: center;" )
            h4.white--text.mb-0.pl-2
              | автозалог
            p.mb-0.white--text.pl-2
              | вы оставляете нам только ПТС
              br
              | автомобиль остается у вас

        v-layout( row )
          v-flex.text-xs-right.blue.darken-2.white--text( xs4, style="display: flex; align-items: center; justify-content: flex-end;" )
            h6.mb-0.white--text.pr-2
              | {{ sum1 | currency }}
          v-flex.red.darken-2( xs4, style="display: flex; align-items: center; justify-content: center" )
            h5.text-xs-center.white--text.mb-0.py-3
              | сумма займа
          v-flex.text-xs-left.green.darken-2( xs4, style="display: flex; align-items: center" )
            h6.mb-0.white--text.pl-2
              | {{ sum2 | currency }}

        v-layout( row )
          v-flex.text-xs-right.blue.darken-3.white--text( xs4, style="display: flex; align-items: center; justify-content: flex-end;" )
            h6.mb-0.white--text.pr-2
              | {{ pawnshop.percent | percent }}
          v-flex.red.darken-3( xs4, style="display: flex; align-items: center; justify-content: center" )
            h5.text-xs-center.white--text.mb-0.py-3
              | процентная ставка
          v-flex.text-xs-left.green.darken-3( xs4, style="display: flex; align-items: center" )
            h6.mb-0.white--text.pl-2
              | {{ zalog.percent | percent }}

        v-layout( row )
          v-flex.text-xs-right.blue.darken-4.white--text( xs4, style="display: flex; align-items: center; justify-content: flex-end;" )
            h6.mb-0.white--text.pr-2
              | {{ payment1 | currency }}
          v-flex.red.darken-4( xs4, style="display: flex; align-items: center; justify-content: center" )
            h5.text-xs-center.white--text.mb-0.py-3
              | ежемесячный платеж
          v-flex.text-xs-left.green.darken-4( xs4, style="display: flex; align-items: center" )
            h6.mb-0.white--text.pl-2
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
          value: 2000000
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
