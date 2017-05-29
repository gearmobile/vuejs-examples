<template lang="pug">
  .pomodoro
    // header
    header.pomodoro__header
      h2.pomodoro__caption
        span pomodoro
        button( type="button", @click="onClick()" )
          i.glyphicon( :class="showIcon" )
    // body
    main.well.pomodoro__body
      .pomodoro__timer
        span {{ minute }} : {{ second }}
</template>

<script>
  // const WORKING_TIME = 25
  // const REST_TIME = 5
  // const POMODORO_STATES = {
  //   work: 'work',
  //   rest: 'rest'
  // }

  export default {
    name: 'home',
    data () {
      return {
        minute: 0,
        second: 0,
        run: false
      }
    },
    computed: {
      showIcon () {
        return !this.run ? 'glyphicon-play' : 'glyphicon-stop'
      }
    },
    methods: {
      runSeconds () {
        if (this.second < 10) {
          this.second += 1
        } else {
          this.second = 0
          this.runMinutes()
        }
      },
      runMinutes () {
        if (this.minute < 2) {
          this.minute += 1
        } else {
          this.onStop()
        }
      },
      onClick () {
        if (!this.run) {
          this.onStart()
        } else {
          this.onStop()
        }
        this.run = !this.run
      },
      onStart () {
        this.runCount = setInterval(this.runSeconds, 1000)
      },
      onStop () {
        clearInterval(this.runCount)
        this.minute = 0
        this.second = 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pomodoro {

    &__header {
      padding-bottom: 1rem;
    }

    &__caption {
      text-transform: capitalize;

      & span {
        margin-right: 2rem;
      }
    }
  }
</style>
