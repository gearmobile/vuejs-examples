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
                v-select( :items="marks", label="Выберите марку бетона", v-model="mark", single-line, bottom )
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
                    | Марка бетона - {{ mark.text }}
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
        return Math.round(value) + ' куб.м бетона'
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
          allowance: 20
        },
        footer: {
          value: null,
          status: false
        },
        header: {
          value: null,
          status: false
        },
        mark: 'm-100',
        marks: [
          { text: 'm-100', price: 3400 },
          { text: 'm-150', price: 3550 },
          { text: 'm-200', price: 3750 },
          { text: 'm-250', price: 3850 },
          { text: 'm-300', price: 3950 },
          { text: 'm-350', price: 4050 },
          { text: 'm-400', price: 4600 },
          { text: 'm-450', price: 4850 },
          { text: 'm-500', price: 5000 },
          { text: 'm-550', price: 5050 },
          { text: 'm-600', price: 5200 },
          { text: 'm-650', price: 5500 }
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
      delta () {
        const result = (this.basement.sideD / 100)
        return result
      },
      long () {
        const result = (this.basement.sideA - this.delta * 2) * this.delta
        return result
      },
      short () {
        const result = this.delta * ((this.basement.sideB - this.delta * 3) / 2)
        return result
      },
      base () {
        const result = this.basement.sideA * this.basement.sideB
        return result
      },
      header () {
        const result = this.base * (this.header.value * 0.01)
        return result
      },
      footer () {
        const delta = (this.basement.allowance * 0.01) * 2
        const L1 = this.basement.sideA + delta
        const L2 = this.basement.sideB + delta
        const result = L1 * L2 * this.footer.value
        return result
      },
      s1 () {
        const s1 = this.base
        const s2 = (this.basement.sideA - this.delta * 2) * (this.basement.sideB - this.delta * 2)
        const result = s1 - s2
        return result
      },
      s2 () {
        const result = (this.s1 - this.long) * this.basement.sideC
        return result
      },
      s3 () {
        const result = (this.s1 - this.long * 2) * this.basement.sideC
        return result
      },
      s4 () {
        const result = (this.s2 - this.short) * this.basement.sideC
        return result
      },
      s5 () {
        const result = (this.s2 - this.short * 2) * this.basement.sideC
        return result
      },
      output () {
        let result = null
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
        return result
      },
      sum () {
        const result = this.output * this.mark.price
        return result
      }
    },
    created () {
      this.sum
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
