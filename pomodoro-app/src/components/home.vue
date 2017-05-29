<template lang="pug">
  .pomodoro
    // HEADER
    header.pomodoro__header
      h2.pomodoro__caption
        span pomodoro
        button( type="button", @click="onStart()", :disabled="state === 'started'" ): i.glyphicon.glyphicon-play
        button( type="button", @click="onPause()", :disabled="state !== 'started'" ): i.glyphicon.glyphicon-pause
        button( type="button", @click="onStop()", :disabled="state !== 'started' && state !== 'paused'" ): i.glyphicon.glyphicon-stop
    // POMODORO STATE
    h3.pomodoro__title {{ title }}
    // BODY
    main.well.pomodoro__body
      .pomodoro__timer
        span {{ minuteOutput }} : {{ secondOutput }}
</template>

<script>
  const POMODORO_STATES = {
    WORK: 'work',
    REST: 'rest'
  }
  const STATES = {
    STARTED: 'started',
    STOPPED: 'stopped',
    PAUSED: 'paused'
  }
  const WORKING_TIME = 25
  const REST_TIME = 5

  export default {
    name: 'home',
    data () {
      return {
        state: STATES.STOPPED,
        minute: WORKING_TIME,
        second: 0,
        pomodoroState: POMODORO_STATES.WORK,
        timeStamp: 0
      }
    },
    computed: {
      minuteOutput () {
        if (this.minute < 10) {
          return '0' + this.minute
        } else {
          return this.minute
        }
      },
      secondOutput () {
        if (this.second < 10) {
          return '0' + this.second
        } else {
          return this.second
        }
      },
      title () {
        return this.pomodoroState === POMODORO_STATES.WORK ? 'Work' : 'Rest'
      }
    },
    methods: {
      onStart () {
        this.state = STATES.STARTED
        this.onRun()
        this.interval = setInterval(this.onRun, 1000)
      },
      onPause () {
        this.state = STATES.PAUSED
        clearInterval(this.interval)
      },
      onStop () {
        this.state = STATES.STOPPED
        clearInterval(this.interval)
        this.pomodoroState = POMODORO_STATES.WORK
        this.minute = WORKING_TIME
        this.second = 0
      },
      onRun () {
        // COUNT SECONDS
        if (this.second !== 0) {
          this.second -= 1
          return
        }
        // COUNT MINUTES
        if (this.minute !== 0) {
          this.minute -= 1
          this.second = 59
          return
        }
        // TOOGLE STATES OF THE TIMER
        this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK
        // TOGGLE TIME PERIOD
        if (this.pomodoroState === POMODORO_STATES.WORK) {
          this.minute = WORKING_TIME
        } else {
          this.minute = REST_TIME
        }
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

    &__title {
      margin-top: 0;
    }
  }
</style>
