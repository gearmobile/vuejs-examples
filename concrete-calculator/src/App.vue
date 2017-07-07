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
              v-radio( label="Type 1", v-model="type", value="basement1", color="indigo", hide-details )
              v-radio( label="Type 2", v-model="type", value="basement2", color="indigo", hide-details )
              v-radio( label="Type 3", v-model="type", value="basement3", color="indigo", hide-details )
              v-radio( label="Type 4", v-model="type", value="basement4", color="indigo", hide-details )
              v-radio( label="Type 5", v-model="type", value="basement5", color="indigo", hide-details )

        // MAIN

        v-card.mb-4.pa-4

          // SIDE A

          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Длина стороны А, метр
            v-flex( xs8 )
              v-text-field( id="sideA", name="sideA", label="Длина стороны А", v-model="basement.sideA", required )

          // SIDE B
          
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Длина стороны B, метр
            v-flex( xs8 )
              v-text-field( id="sideB", name="sideB", label="Длина стороны B", v-model="basement.sideB", required )

          // SIDE C
          
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Высота ленты C, метр
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
              v-card-media( :src="imagePath", height="540px" )

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
                    //- | {{ volume1 }}
                  v-list-tile
                    | {{ mark }}


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
        // mark ---
        mark: 'm-100',
        marks: ['m-100', 'm-150', 'm-200', 'm-250', 'm-300', 'm-350', 'm-400', 'm-450', 'm-500', 'm-550', 'm-600']
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
        const s = (this.basement.sideA - this.delta * 2) * this.delta
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
      volume4 () {
        const delta = (this.basement.sideD / 100)
        const S1 = this.basement.sideA * this.basement.sideB
        const S2 = (this.basement.sideA - delta * 2) * (this.basement.sideB - delta * 2)
        const S3 = (this.basement.sideA - delta * 2) * delta
        const S4 = delta * ((this.basement.sideB - delta * 3) / 2)
        const V = (S1 - S2 - S3 - S4) * this.basement.sideC
        return V
      },
      volume5 () {
        const delta = (this.basement.sideD / 100)
        const S1 = this.basement.sideA * this.basement.sideB
        const S2 = (this.basement.sideA - delta * 2) * (this.basement.sideB - delta * 2)
        const S3 = (this.basement.sideA - delta * 2) * delta
        const S4 = (delta * ((this.basement.sideB - delta * 3) / 2)) * 2
        const V = (S1 - S2 - S3 - S4) * this.basement.sideC
        return V
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
