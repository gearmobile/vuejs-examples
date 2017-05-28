<template lang="pug">
  .pomodoro
    // header
    header.pomodoro__header
      h2.pomodoro__caption
        span pomodoro
        button( type="button", @click="onStart()" )
          i.glyphicon.glyphicon-play
        button( type="button", @click="onStop()" )
          i.glyphicon.glyphicon-stop
    // body
    main.well.pomodoro__body
      .pomodoro__timer
        span {{ minute }} : {{ second }}
</template>

<script>
  // const WORKING_TIME = 25
  const REST_TIME = 5
  // const POMODORO_STATES = {
  //   work: 'work',
  //   rest: 'rest'
  // }

  export default {
    name: 'home',
    data () {
      return {
        minute: 0,
        second: 0
      }
    },
    methods: {
      onStop () {
        clearInterval(this.interval)
      },
      playMinutes () {
        if (this.minute <= REST_TIME) {
          this.minute += 1
        } else {
          return false
        }
      },
      playSeconds () {
        if (this.second < 10) {
          this.second += 1
        } else {
          this.playMinutes()
          this.second = 0
        }
      },
      onStart () {
        this.interval = setInterval(this.playSeconds, 1000)
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
