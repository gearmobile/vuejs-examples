<template lang="pug">
  ul.nav.nav-justified.nav-pills
    router-link( tag="li", to="/", role="presentation", active-class="active", exact )
      a( href="#" )
        | step 1
    router-link( tag="li", to="/secondo", role="presentation", active-class="active" )
      a( href="#" )
        | step 2
    router-link( tag="li", to="/tetro", role="presentation", active-class="active" )
      a( href="#" )
        | step 3
    router-link( tag="li", to="/quattro", role="presentation", active-class="active" )
      a( href="#" )
        | step 4
    router-link( tag="li", to="/cinque", role="presentation", active-class="active" )
      a( href="#" )
        | step 5
    router-link( tag="li", to="/sei", role="presentation", active-class="active" )
      a( href="#" )
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

    & > li > a
      text-transform uppercase
      color #000
      font-weight 700

    & > li.active > a
      background-color #f6e95f
      color #000

</style>
