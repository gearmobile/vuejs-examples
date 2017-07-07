<template lang="pug">
  
  v-app

    v-container
      v-flex( md8, offset-md2 )

        // HEADLINE

        v-layout( row )
          v-flex( xs12 )
            h2.display-2.text-xs-center
              | Расчет количества бетона для фундамента

        // TYPE

        v-card.mb-4.pa-4

          v-layout( row, style="align-items: center;" )
            v-flex( xs4 )
              v-subheader
                | Тип фундамента
            v-flex( xs8, style="display: flex;" )
              v-radio( label="Type 1", v-model="type", value="basement1", color="teal", hide-details )
              v-radio( label="Type 2", v-model="type", value="basement2", color="teal", hide-details )
              v-radio( label="Type 3", v-model="type", value="basement3", color="teal", hide-details )
              v-radio( label="Type 4", v-model="type", value="basement4", color="teal", hide-details )
              v-radio( label="Type 5", v-model="type", value="basement5", color="teal", hide-details )

        // MAIN

        v-card.mb-4.pa-4

          // SIDE A

          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Длина стороны А, метры
            v-flex( xs8 )
              v-text-field( id="sideA", name="sideA", label="Длина стороны А", v-model="basement.sideA", required )

          // SIDE B
          
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Длина стороны B, метры
            v-flex( xs8 )
              v-text-field( id="sideB", name="sideB", label="Длина стороны B", v-model="basement.sideB", required )

          // SIDE C
          
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Высота ленты C, метры
            v-flex( xs8 )
              v-text-field( id="sideC", name="sideC", label="Высота ленты C", v-model="basement.sideC", required )

          // SIDE D
          
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Толщина ленты D, см
            v-flex( xs8 )
              v-text-field( id="sideD", name="sideD", label="Толщина ленты D", v-model="basement.sideD", required )

        // PREVIEW

        v-card.mb-5
          v-layout( row )
            v-flex( xs12 )
              v-card-media( :src="imagePath", height="700px" )

        // ADDITIONAL

        v-card.mb-4.pa-4

          // PLATE
          
          v-container
            // ---
            v-layout( row, style="align-items: center;" )
              v-flex( xs4 )
                v-subheader
                  | Добавить плиту основание
              v-flex( xs8 )
                v-checkbox( v-model="plate.status", hide-details )
            // ---
            v-slide-y-transition( mode="out-in" )
              v-container( v-if="plate.status" )
                v-layout( row, style="align-items: center;" )
                  v-flex( xs4 )
                    v-subheader
                      | Толщина плиты
                  v-flex( xs8 )
                    v-text-field( id="plate", name="plate", label="Толщина плиты", v-model="plate.value", hide-details )
                v-layout.mt-2
                  v-flex( xs12, style="display: flex; align-items: center;" )
                    v-icon.mr-2.teal--text.text--darken-2
                      | error_outline
                    p.mb-0
                      | Рекомендуемая толщина от 25 до 40 см

          // CROSS
          
          v-container
            // ---
            v-layout( row, style="align-items: center;" )
              v-flex( xs4 )
                v-subheader
                  | Добавить плиту перекрытие
              v-flex( xs8 )
                v-checkbox( v-model="cross.status", hide-details )
            // ---
            v-slide-y-transition( mode="out-in" )
              v-container( v-if="cross.status" )
                v-layout( row, style="align-items: center;" )
                  v-flex( xs4 )
                    v-subheader
                      | Толщина плиты
                  v-flex( xs8 )
                    v-text-field( id="cross", name="cross", label="Толщина плиты", v-model="cross.value", hide-details )
                v-layout.mt-2
                  v-flex( xs12, style="display: flex; align-items: center;" )
                    v-icon.mr-2.teal--text.text--darken-2
                      | error_outline
                    p.mb-0
                      | Рекомендуемая толщина от 18 до 22 см

          // MARK
          
          v-container
            v-layout( row, style="align-items: center;" )
              v-flex( xs4 )
                v-subheader
                  | Марка бетона
              v-flex( xs8 )
                v-select( :items="marks", label="Марка бетона", v-model="mark", single-line, bottom )
            v-layout( row, style="align-items: center;" )
              v-flex( xs12, style="display: flex; align-items: center;" )
                v-icon.mr-2.teal--text.text--darken-2
                  | error_outline
                p.mb-0
                  | Рекомендуемая марка м300-м350

          // OUTPUT
          
          v-container
            v-layout( row )
              v-flex( xs12 )
                v-list
                  v-list-tile
                    | {{ s1 }}
                  v-list-tile
                    | марка бетона - {{ mark.text }}


    // FOOTER

    v-footer( :fixed="fixed" )
      v-spacer
      span &copy; {{ date }}

</template>

<script>
  export default {
    data () {
      return {
        fixed: true,
        type: 'basement1',
        basement: {
          sideA: null,
          sideB: null,
          sideC: null,
          sideD: null
        },
        plate: {
          value: null,
          status: false
        },
        cross: {
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
        return require('./assets/' + this.type + '.jpg')
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
      s1 () {
        const s1 = this.basement.sideA * this.basement.sideB
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
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
