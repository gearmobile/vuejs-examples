<template lang="pug">
  .pag
    .pag__left
    .pag__right
</template>

<script>
  export default {
    name: 'pagination'
  }
</script>

<style lang="stylus">
  .pag
    display flex
    justify-content space-between
    align-items center
    border 1px solid rgba( 0,0,0, .6 )

    &__left
    &__right
      padding 2rem 3rem
      background-color salmon
      cursor pointer

      &:hover
        background-color firebrick
</style>
