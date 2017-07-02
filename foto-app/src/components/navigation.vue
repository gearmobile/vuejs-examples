<template lang="pug">
  ul.nav.nav-justified.nav-pills
    router-link( tag="li", to="/1", role="presentation", active-class="active", exact )
      a( href="#" )
        | step 1
    //- router-link( tag="li", to="/secondo", role="presentation", active-class="active" )
    router-link( tag="li", to="/2", role="presentation", active-class="active" )
      a( href="#" )
        | step 2
    //- router-link( tag="li", to="/tetro", role="presentation", active-class="active" )
    router-link( tag="li", to="/3", role="presentation", active-class="active" )
      a( href="#" )
        | step 3
    //- router-link( tag="li", to="/quattro", role="presentation", active-class="active" )
    router-link( tag="li", to="/4", role="presentation", active-class="active" )
      a( href="#" )
        | step 4
    //- router-link( tag="li", to="/cinque", role="presentation", active-class="active" )
    router-link( tag="li", to="/5", role="presentation", active-class="active" )
      a( href="#" )
        | step 5
    //- router-link( tag="li", to="/sei", role="presentation", active-class="active" )
    router-link( tag="li", to="/6", role="presentation", active-class="active" )
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

</style>
