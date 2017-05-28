<template lang="pug">

  // PUNCH
  .punch
    
    // PUNCH HEADER
    header.punch__header( :style="{ 'background-image': '../assets/bag-burst.png' }" )
    
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
      const result = this.health - this.randomPunch()
      if (result <= 0) {
        this.health = 0
        this.finished = true
      } else {
        this.health = result
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
  @import '../styles/punch-styles.scss'
</style>
