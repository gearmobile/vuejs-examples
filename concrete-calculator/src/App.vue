<template lang="pug">
  
  v-app

    v-container
      v-flex( md8, offset-md2 )

        // HEADLINE

        v-layout( row )
          
          // TITLE

          v-flex( xs12 )
            h2.display-2.text-xs-center
              | Расчет количества бетона для фундамента

        // TYPE

        v-card.mb-4.pa-4

          v-layout( row, style="align-items: center" )
            v-flex( xs4 )
              v-subheader
                | Тип фундамента
            v-flex( xs8, style="display: flex" )
              v-radio( v-for="(item, index) in types" :label="'Type ' + (index + 1)", v-model="type", :value="item", :key="index", color="teal", :disabled="radio", hide-details )

        // MAIN

        v-card.mb-4.pa-4

          // SIDE A

          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Длина стороны А, метры
            v-flex( xs8 )
              v-text-field( id="sideA", name="sideA", label="Сторона А", v-model="basement.sideA", required )

          // SIDE B
          
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Длина стороны B, метры
            v-flex( xs8 )
              v-text-field( id="sideB", name="sideB", label="Сторона B", v-model="basement.sideB", required )

          // SIDE C
          
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Высота ленты C, метры
            v-flex( xs8 )
              v-text-field( id="sideC", name="sideC", label="Высота C", v-model="basement.sideC", required )

          // SIDE D
          
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Толщина ленты D, см
            v-flex( xs8 )
              v-text-field( id="sideD", name="sideD", label="Толщина D", v-model="basement.sideD", required )

        // PREVIEW

        v-card.mb-5
          v-layout( row )
            v-flex( xs12 )
              v-card-media( :src="imagePath", height="700px" )

        // ADDITIONAL

        v-card.mb-4.pa-4

          // FOOTER
          
          v-container
            // ---
            v-layout( row, style="align-items: center;" )
              v-flex( xs4 )
                v-subheader
                  | Добавить плиту основание
              v-flex( xs8 )
                v-checkbox( v-model="footer.status", hide-details )
            // ---
            v-slide-y-transition( mode="out-in" )
              v-container( v-if="footer.status" )
                v-layout( row, style="align-items: center;" )
                  v-flex( xs4 )
                    v-subheader
                      | Толщина плиты, см
                  v-flex( xs8 )
                    v-text-field( id="footer", name="footer", label="Толщина", v-model="footer.value", hide-details )
                v-layout.mt-2
                  v-flex( xs12, style="display: flex; align-items: center;" )
                    v-icon.mr-2.teal--text.text--darken-2
                      | error_outline
                    p.mb-0.teal--text
                      | Рекомендуемая толщина от 25 до 40 см

          // HEADER
          
          v-container
            // ---
            v-layout( row, style="align-items: center;" )
              v-flex( xs4 )
                v-subheader
                  | Добавить плиту перекрытие
              v-flex( xs8 )
                v-checkbox( v-model="header.status", hide-details )
            // ---
            v-slide-y-transition( mode="out-in" )
              v-container( v-if="header.status" )
                v-layout( row, style="align-items: center;" )
                  v-flex( xs4 )
                    v-subheader
                      | Толщина плиты, см
                  v-flex( xs8 )
                    v-text-field( id="header", name="header", label="Толщина", v-model="header.value", hide-details )
                v-layout.mt-2
                  v-flex( xs12, style="display: flex; align-items: center;" )
                    v-icon.mr-2.teal--text.text--darken-2
                      | error_outline
                    p.mb-0.teal--text
                      | Рекомендуемая толщина от 18 до 22 см

          // MARK
          
          v-container
            v-layout( row, style="align-items: center;" )
              v-flex( xs4 )
                v-subheader
                  | Марка бетона
              v-flex( xs8 )
                v-select( :items="marks", label="Выберите марку бетона", v-model="mark", item-text="name", item-value="price", return-object, single-line, bottom, hide-details )
            v-layout( row, style="align-items: center;" )
              v-flex( xs12, style="display: flex; align-items: center;" )
                v-icon.mr-2.teal--text.text--darken-2
                  | error_outline
                p.mb-0.teal--text
                  | Рекомендуемая марка м300-м350

          // OUTPUT
          
          v-container
            v-layout( row )
              v-flex( xs12 )
                v-list
                  v-list-tile
                    | Потребуется {{ output | meters }}
                  v-list-tile
                    | Марка бетона - {{ mark.name }}
                  v-list-tile
                    | На сумму - {{ sum | currency }}


    // FOOT

    v-footer( :fixed="fixed" )
      v-spacer
      span &copy; {{ date }}

</template>

<script>
  export default {
    filters: {
      meters (value) {
        return value.toFixed(2) + ' куб.м бетона'
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
        fixed: true,
        radio: false,
        type: 'basement1',
        types: [
          'basement1',
          'basement2',
          'basement3',
          'basement4',
          'basement5'
        ],
        basement: {
          sideA: null,
          sideB: null,
          sideC: null,
          sideD: null,
          allowance: 0.2
        },
        footer: {
          value: 25,
          status: false
        },
        header: {
          value: 18,
          status: false
        },
        mark: { name: 'm100', price: 3400 },
        marks: [
          { name: 'm100', price: 3400 },
          { name: 'm150', price: 3550 },
          { name: 'm200', price: 3750 },
          { name: 'm250', price: 3850 },
          { name: 'm300', price: 3950 },
          { name: 'm350', price: 4050 },
          { name: 'm400', price: 4600 },
          { name: 'm450', price: 4850 },
          { name: 'm500', price: 5000 },
          { name: 'm550', price: 5050 },
          { name: 'm600', price: 5200 },
          { name: 'm650', price: 5500 }
        ]
      }
    },
    computed: {
      date () {
        return new Date().getFullYear()
      },
      imagePath () {
        let path
        if (this.footer.status) {
          path = 'basement6'
          this.radio = true
        }
        if (this.header.status) {
          path = 'basement7'
          this.radio = true
        }
        if (this.footer.status && this.header.status) {
          path = 'basement8'
          this.radio = true
        }
        if (!this.footer.status && !this.header.status) {
          path = this.type
          this.radio = false
        }
        return require('./assets/' + path + '.jpg')
      },
      sideA () {
        return this.basement.sideA === null ? 0 : parseInt(this.basement.sideA)
      },
      sideB () {
        return this.basement.sideB === null ? 0 : parseInt(this.basement.sideB)
      },
      sideD () {
        return this.basement.sideD === null ? 0 : parseInt(this.basement.sideD) * 0.01
      },
      sideC () {
        return this.basement.sideC === null ? 0 : parseInt(this.basement.sideC)
      },
      long () {
        const result = (this.sideA - this.sideD * 2) * this.sideD
        return result
      },
      short () {
        const result = this.sideD * ((this.sideB - this.sideD * 3) / 2)
        return result
      },
      base () {
        const result = this.sideA * this.sideB
        return result
      },
      head () {
        let result = 0
        if (this.header.status) {
          result = this.base * (this.header.value * 0.01)
        }
        return result
      },
      foot () {
        let result = 0
        if (this.footer.status) {
          const delta = this.basement.allowance * 2
          result = (this.sideA + delta) * (this.sideB + delta) * (this.footer.value * 0.01)
        }
        return result
      },
      s1 () {
        const outer = this.base
        const inner = (this.sideA - this.sideD * 2) * (this.sideB - this.sideD * 2)
        const result = outer - inner
        return result
      },
      s2 () {
        const result = this.s1 + this.long
        return result
      },
      s3 () {
        const result = this.s1 + this.long * 2
        return result
      },
      s4 () {
        const result = this.s2 + this.short
        return result
      },
      s5 () {
        const result = this.s2 + this.short * 2
        return result
      },
      output () {
        let result = 0
        switch (this.type) {
          case 'basement1':
            result = this.s1
            break
          case 'basement2':
            result = this.s2
            break
          case 'basement3':
            result = this.s3
            break
          case 'basement4':
            result = this.s4
            break
          case 'basement5':
            result = this.s5
            break
          default:
            result = 0
        }
        result *= this.sideC
        result += (this.head + this.foot)
        return result
      },
      sum () {
        const result = this.output * this.mark.price
        return result
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
