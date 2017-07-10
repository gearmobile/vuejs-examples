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
      v-layout( row, wrap )
        v-flex( xs-8 )
          v-stepper-content( step="2" )
            v-card
              v-card-text( height="200px" )
                | step 2
              v-btn.primary( @click.native="stage = 3" )
                | next
        v-flex( xs-4 )
          v-card
            v-card-text
              | content
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

    v-tabs( v-model="active" )
      v-tabs-bar
        v-tabs-item( href="#step1", ripple )
          | step 1
        v-tabs-item( href="#step2", ripple )
          | step 2
        v-tabs-item( href="#step3", ripple )
          | step 3
        v-tabs-item( href="#step4", ripple )
          | step 4
        v-tabs-item( href="#step5", ripple )
          | step 5
        v-tabs-item( href="#step6", ripple )
          | step 6
        v-tabs-slider.white
      v-tabs-content( id="step1" )
        v-card( flat )
          v-card-text
            | step 1
      v-tabs-content( id="step2" )
        v-card( flat )
          v-card-text
            | step 2
      v-tabs-content( id="step3" )
        v-card( flat )
          v-card-text
            | step 3
      v-tabs-content( id="step4" )
        v-card( flat )
          v-card-text
            | step 4
      v-tabs-content( id="step5" )
        v-card( flat )
          v-card-text
            | step 5
      v-tabs-content( id="step6" )
        v-card( flat )
          v-card-text
            | step 6

    v-btn.primary( @click.native="nextStep" )
      | next step


    v-footer( :fixed="fixed" )
      span
        | {{ date }}

</template>

<script>
  export default {
    data () {
      return {
        fixed: true,
        stage: 0,
        steps: ['step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6'],
        text: 'lorem ipsum dolor est',
        active: null
      }
    },
    methods: {
      nextStep () {
        // const index = ((this.steps.indexOf(this.steps.find(el => el.title === this.active)) + 1)) % this.steps.length
        // this.active = this.steps[index].title
        this.active = this.steps[(this.steps.indexOf(this.active) + 1) % this.steps.length]
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
