<template lang="pug">
  ul.nav.nav-justified
    router-link( tag="li", to="/", role="presentation", activeClass="active", exact )
      a.text-uppercase( href="#" )
        | step 1
    router-link( tag="li", to="/secondo", role="presentation", activeClass="active" )
      a.text-uppercase( href="#" )
        | step 2
    router-link( tag="li", to="/tetro", role="presentation", activeClass="active" )
      a.text-uppercase( href="#" )
        | step 3
    router-link( tag="li", to="/quattro", role="presentation", activeClass="active" )
      a.text-uppercase( href="#" )
        | step 4
    router-link( tag="li", to="/cinque", role="presentation", activeClass="active" )
      a.text-uppercase( href="#" )
        | step 5
    router-link( tag="li", to="/sei", role="presentation", activeClass="active" )
      a.text-uppercase( href="#" )
        | step 6
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
        // msg: 'navigation'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .nav
    margin-bottom .6rem
</style>
