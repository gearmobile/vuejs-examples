<template lang="pug">
  
  // ROOT
  v-app.app
    v-container

      // NAVIGATION SECTION
      v-layout.amber.text-xs-center.white--text( row, wrap )
        v-flex.py-3.app__nav( xs12, md3, @click="current = 'appOne'", :class="{ 'app__nav--active': current === 'appOne' }" )
          .title
            | Квартира
        v-flex.py-3.app__nav( xs12, md3, @click="current = 'appTwo'", :class="{ 'app__nav--active': current === 'appTwo' }" )
          .title
            | Коттедж
        v-flex.py-3.app__nav( xs12, md3, @click="current = 'appThree'", :class="{ 'app__nav--active': current === 'appThree' }" )
          .title
            | Офис
        v-flex.py-3.app__nav( xs12, md3, @click="current = 'appFour'", :class="{ 'app__nav--active': current === 'appFour' }" )
          .title
            | Дача

      // OUTPUT SECTION
      v-layout( row, wrap )
        v-flex( xs12, md6 )
          v-fade-transition( mode="out-in" )
            keep-alive
              component( :is="current" )
        v-flex( xs12, md6 )
          app-description
          app-output

</template>

<script>
  import Description from './components/description.vue'
  import Output from './components/output.vue'

  import One from './components/one.vue'
  import Two from './components/two.vue'
  import Three from './components/three.vue'
  import Four from './components/four.vue'

  export default {
    data () {
      return {
        current: 'appOne'
      }
    },
    components: {
      appDescription: Description,
      appOutput: Output,
      appOne: One,
      appTwo: Two,
      appThree: Three,
      appFour: Four
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
  @import './stylus/app'
</style>
