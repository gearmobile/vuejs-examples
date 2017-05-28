<template lang="pug">

  // PUNCH
  .punch
    
    // PUNCH HEADER
    header.punch__header
    
    // PUNCH MAIN
    main.punch__main
      .punch__progress
        .punch__inner( :style="{ width: health + '%' }", :class="{ 'punch-one-third': oneThird, 'punch-two-third': twoThird, 'punch-three-third': threeThird }" )
        .punch__text( :class="{ 'first-half': oneThird, 'second-half': twoThird }" ) {{ health }}
    
    // PUNCH FOOTER
    footer.punch__footer
      .punch__control
        button.btn.btn-default.punch__button( type="button", @click="onPunch()", v-if="!finished" ) punch
        button.btn.btn-default.punch__button( type="button", @click="onReset()" ) reset

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      health: 100,
      finished: false
    }
  },
  methods: {
    randomPunch () {
      return Math.floor(Math.random() * 10) + 1
    },
    onPunch  () {
      if (this.health > 0) {
        this.health -= this.randomPunch()
      } else {
        this.finished = true
      }
    },
    onReset () {
      this.health = 100
      this.finished = false
    }
  },
  computed: {
    oneThird () {
      return this.health >= (100 / 3) * 2
    },
    twoThird () {
      return this.health <= (100 / 3) * 2
    },
    threeThird () {
      return this.health <= (100 / 3) * 1
    }
  }
}
</script>

<style lang="scss" scoped>
  .punch {

    .first-half {
      color: white;
    }

    .second-half {
      color: black;
    }

    .punch-one-third {
      background-color: green;
    }

    .punch-two-third {
      background-color: yellow;
    }

    .punch-three-third {
      background-color: red;
    }

    &__progress {
      border: .2rem solid #000;
      border-radius: .2rem;
      position: relative;
    }

    &__inner {
      height: 4rem;
    }

    &__text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      font-size: 1.8rem;
    }

    &__footer {
      padding: 1rem 0;
    }

    &__control {
      margin: 0 auto;
      text-align: center;
    }

    &__button {
      margin: 0 1rem;
      text-transform: capitalize;
    }
  }
</style>
