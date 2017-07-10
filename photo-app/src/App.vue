<template lang="pug">

  v-app

    v-stepper( v-model="stage" )
      v-stepper-header
        v-stepper-step( step="1" )
          | step 1
        v-divider
        v-stepper-step( step="2" )
          | step 2
        v-divider
        v-stepper-step( step="3" )
          | step 3
        v-divider
        v-stepper-step( step="4" )
          | step 4
        v-divider
        v-stepper-step( step="5" )
          | step 5
        v-divider
        v-stepper-step( step="6" )
          | step 6
      v-stepper-content( step="1" )
        v-card
          v-card-text( height="200px" )
            | step 1
          v-btn.primary( @click.native="stage = 2" )
            | next
      v-stepper-content( step="2" )
        v-card
          v-card-text( height="200px" )
            | step 2
          v-btn.primary( @click.native="stage = 3" )
            | next
      v-stepper-content( step="3" )
        v-card
          v-card-text( height="200px" )
            | step 3
          v-btn.primary( @click.native="stage = 4" )
            | next
      v-stepper-content( step="4" )
        v-card
          v-card-text( height="200px" )
            | step 4
          v-btn.primary( @click.native="stage = 5" )
            | next
      v-stepper-content( step="5" )
        v-card
          v-card-text( height="200px" )
            | step 5
          v-btn.primary( @click.native="stage = 6" )
            | next
      v-stepper-content( step="6" )
        v-card
          v-card-text( height="200px" )
            | step 6
          v-btn.primary( @click.native="stage = 1" )
            | next


    v-footer( :fixed="fixed" )
      span
        | {{ date }}

</template>

<script>
  export default {
    data () {
      return {
        fixed: true,
        stage: 0
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
