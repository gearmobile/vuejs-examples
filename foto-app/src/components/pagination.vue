<template lang="pug">
  .pag
    button.pag__prev( @click="onPrev()" )
      | prev
    button.pag__next( @click="onNext()" )
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
    display flex
    justify-content space-between
    align-items center
    border 1px solid rgba( 0,0,0, .6 )

    &__prev
    &__next
      padding 2rem 3rem
      background-color salmon
      cursor pointer
      border none

      &:hover
        background-color firebrick

</style>
