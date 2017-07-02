<template lang="pug">
  ul.nav.nav-justified.nav-pills
    router-link( tag="li", :to="{ name: 'Primo' }", role="presentation", active-class="active", exact )
      a.disable-links( href="#" )
        | step 1
    router-link( tag="li", :to="{ name: 'Secondo' }", role="presentation", active-class="active" )
      a.disable-links( href="#" )
        | step 2
    router-link( tag="li", :to="{  name: 'Tetro' }", role="presentation", active-class="active" )
      a.disable-links( href="#" )
        | step 3
    router-link( tag="li", :to="{ name: 'Quattro' }", role="presentation", active-class="active" )
      a.disable-links( href="#" )
        | step 4
    router-link( tag="li", :to="{ name: 'Cinque' }", role="presentation", active-class="active" )
      a.disable-links( href="#" )
        | step 5
    router-link( tag="li", :to="{ name: 'Sei' }", role="presentation", active-class="active" )
      a.disable-links( href="#" )
        | step 6
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style lang="stylus" scoped>

  .nav
    margin-bottom .6rem
    background-color #ddd

    & > li > a
      text-transform uppercase
      color #000
      font-weight 700

      &:hover
        background-color #828282
        color #fff

    & > li.active > a
      background-color #828282
      color #fff

    & .disable-links
      pointer-events none

</style>
