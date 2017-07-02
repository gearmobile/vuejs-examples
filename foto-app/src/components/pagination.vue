<template lang="pug">
  .pag
    button.pag__prev( @click="onPrev()", v-show="prevButton" )
      | prev
    button.pag__next( @click="onNext()", v-show="nextButton" )
      | next
</template>

<script>

  export default {
    name: 'pagination',
    data () {
      return {
        count: 1
      }
    },
    computed: {
      nextButton () {
        return this.count !== 6
      },
      prevButton () {
        return this.count !== 1
      }
    },
    methods: {
      onNext () {
        if (this.count < 6) {
          this.count += 1
          this.$router.push({ path: '/' + this.count })
        }
      },
      onPrev () {
        if (this.count > 1) {
          this.count -= 1
          this.$router.push({ path: '/' + this.count })
        }
      }
    }
  }
</script>

<style lang="stylus">

  .pag
    width 100%
    height 63px
    position relative
    border 1px solid rgba( 0,0,0, .6 )

    &__prev
    &__next
      padding 2rem 3rem
      background-color salmon
      cursor pointer
      border none
      position absolute
      top 0

      &:hover
        background-color firebrick
    
    &__prev
      left 0

    &__next
      right 0

</style>
