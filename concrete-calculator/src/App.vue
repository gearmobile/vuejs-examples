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

        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Тип фундамента
          v-flex( xs8, style="display: flex;" )
            v-radio( label="Type 1", v-model="type", value="basement1", color="indigo", hide-details )
            v-radio( label="Type 2", v-model="type", value="basement2", color="indigo", hide-details )
            v-radio( label="Type 3", v-model="type", value="basement3", color="indigo", hide-details )
            v-radio( label="Type 4", v-model="type", value="basement4", color="indigo", hide-details )
            v-radio( label="Type 5", v-model="type", value="basement5", color="indigo", hide-details )

        // SIDE A

        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Длина стороны А, метр
          v-flex( xs8 )
            v-text-field( id="sideA", name="sideA", label="Длина стороны А", v-model="basement.sideA" )

        // SIDE B
        
        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Длина стороны B, метр
          v-flex( xs8 )
            v-text-field( id="sideB", name="sideB", label="Длина стороны B", v-model="basement.sideB" )

        // SIDE C
        
        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Высота ленты C, метр
          v-flex( xs8 )
            v-text-field( id="sideC", name="sideC", label="Высота ленты C", v-model="basement.sideC" )

        // SIDE D
        
        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Толщина ленты D, см
          v-flex( xs8 )
            v-text-field( id="sideD", name="sideD", label="Толщина ленты D", v-model="basement.sideD" )

        // PREVIEW

        v-layout( row )
          v-flex( xs12 )
            v-card
              v-card-media( :src="imagePath", height="540px" )

        // PLATE
        
        v-container
          // ---
          v-layout( row, style="align-items: baseline;" )
            v-flex( xs4 )
              v-subheader
                | Добавить плиту основание
            v-flex( xs8 )
              v-checkbox( v-model="plate.status" )
          // ---
          v-container( v-if="plate.status" )
            v-layout( row, style="align-items: center;" )
              v-flex( xs4 )
                v-subheader
                  | Толщина плиты
              v-flex( xs8 )
                v-text-field( id="plate", name="plate", label="Толщина ленты D", v-model="plate.value", hide-details )
            v-layout.mt-2
              v-flex( xs12 )
                p
                  | Рекомендуемая толщина от 25 до 40 см.

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
        }
      }
    },
    computed: {
      date () {
        return new Date().getFullYear()
      },
      imagePath () {
        return require('./assets/' + this.type + '.jpg')
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
