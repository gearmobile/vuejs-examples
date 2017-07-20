<template lang="pug">
  
  v-app.app
    v-container

      v-layout.amber.text-xs-center.white--text( row, wrap )
        v-flex.py-3.app__nav( xs12, md3 )
          .title
            | квартира
        v-flex.py-3.app__nav( xs12, md3 )
          .title
            | коттедж
        v-flex.py-3.app__nav( xs12, md3 )
          .title
            | офис
        v-flex.py-3.app__nav( xs12, md3 )
          .title
            | дача

      v-layout( row, wrap )
        v-flex( xs12, md6 )
          component( :is="current" )
        v-flex( xs12, md6 )
          app-description



</template>

<script>
  import Description from './components/description.vue'
  import One from './components/one.vue'

  export default {
    data () {
      return {
        current: 'appOne'
      }
    },
    components: {
      appDescription: Description,
      appOne: One
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './stylus/app'
</style>
