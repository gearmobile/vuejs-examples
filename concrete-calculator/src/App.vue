<template lang="pug">
  
  v-app

    v-container
      v-flex( md8, offset-md2 )

        // TYPE

        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Тип фундамента
          v-flex( xs8 )
            v-radio( label="Type 1", v-model="type", value="type1", color="indigo", hide-details )
            v-radio( label="Type 2", v-model="type", value="type2", color="indigo", hide-details )
            v-radio( label="Type 3", v-model="type", value="type3", color="indigo", hide-details )
            v-radio( label="Type 4", v-model="type", value="type4", color="indigo", hide-details )
            v-radio( label="Type 5", v-model="type", value="type5", color="indigo", hide-details )

        // SIDE A

        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Длина стороны А, метр
          v-flex( xs8 )
            v-text-field( id="sideA", name="sideA", label="Длина стороны А" )

        // SIDE B
        
        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Длина стороны B, метр
          v-flex( xs8 )
            v-text-field( id="sideB", name="sideB", label="Длина стороны B" )

        // SIDE C
        
        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Высота ленты C, метр
          v-flex( xs8 )
            v-text-field( id="sideC", name="sideC", label="Высота ленты C" )

        // SIDE D
        
        v-layout( row, style="align-items: baseline;" )
          v-flex( xs4 )
            v-subheader
              | Толщина ленты D, см
          v-flex( xs8 )
            v-text-field( id="sideD", name="sideD", label="Толщина ленты D" )

    v-footer( :fixed="fixed" )
      v-spacer
      span &copy; {{ date }}

</template>

<script>
  export default {
    data () {
      return {
        fixed: true,
        type: 'type1'
      }
    },
    computed: {
      date () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
