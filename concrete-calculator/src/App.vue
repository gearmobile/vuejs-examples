<template lang="pug">
  
  v-app

    v-container
      v-flex( md8, offset-md2 )

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
        fixed: true
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
