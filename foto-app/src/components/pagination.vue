<template lang="pug">
  .pag
    .pag__prev( @click="onPrev()" ) {{ prev }}
    .pag__next( @click="onNext()" ) {{ next }}
</template>

<script>

  export default {
    name: 'pagination',
    data () {
      return {
        prev: 'prev',
        next: 'next'
      }
    },
    methods: {
      onPrev () {
        // console.log('prev')
        // this.prev()
      },
      onNext () {
        // console.log('next')
        // this.next()
        // this.next()
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

      &:hover
        background-color firebrick

</style>
