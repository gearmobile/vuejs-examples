<template lang="pug">
  .pag
    button.pag__prev( @click="onPrev()" ) {{ prev }}
    button.pag__next( @click="onNext()", :disabled="nextStatus" ) {{ next }}
</template>

<script>

  export default {
    name: 'pagination',
    data () {
      return {
        prev: 'prev',
        next: 'next',
        page: 1,
        nextStatus: false,
        prevStatus: false
      }
    },
    methods: {
      onNext () {
        this.page += 1
        if (this.page < 6) {
          this.$router.push({ path: '/' + this.page })
        }
      },
      onPrev () {
        this.page -= 1
        if (this.page >= 1) {
          this.$router.push({ path: '/' + this.page })
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

      &:hover
        background-color firebrick

</style>
