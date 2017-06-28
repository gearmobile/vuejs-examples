<template lang="pug">
  ul.nav.nav-justified
    router-link( tag="li", to="/", role="presentation", active-class="active", exact )
      a.text-uppercase( href="#" )
        | step 1
    router-link( tag="li", to="/secondo", role="presentation", active-class="active" )
      a.text-uppercase( href="#" )
        | step 2
    router-link( tag="li", to="/tetro", role="presentation", active-class="active" )
      a.text-uppercase( href="#" )
        | step 3
    router-link( tag="li", to="/quattro", role="presentation", active-class="active" )
      a.text-uppercase( href="#" )
        | step 4
    router-link( tag="li", to="/cinque", role="presentation", active-class="active" )
      a.text-uppercase( href="#" )
        | step 5
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
  //
</style>
