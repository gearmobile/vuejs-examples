<template lang="pug">
  .pag
    button.pag__prev( @click="onPrev()" v-show="prevStatus" ) {{ prev }}
    button.pag__next( @click="onNext()", v-show="nextStatus" ) {{ next }}
</template>

<script>

  export default {
    name: 'pagination',
    data () {
      return {
        prev: 'prev',
        next: 'next',
        page: 1,
        nextStatus: true,
        prevStatus: true
      }
    },
    methods: {
      onNext () {
        if (this.page < 6) {
          this.page += 1
          this.$router.push({ path: '/' + this.page })
        } else {
          return false
        }
      },
      onPrev () {
        if (this.page > 1) {
          this.page -= 1
          this.$router.push({ path: '/' + this.page })
        } else {
          return false
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
