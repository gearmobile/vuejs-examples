<template lang="pug">
  nav#nav.navbar.navbar-default
    .container-fluid
      .navbar-header
        router-link.navbar-brand( tag="a", to="/", href="#" ) appStocker
      .collapse.navbar-collapse
        ul.nav.navbar-nav
          router-link( tag="li", to="/portfolio", activeClass="active" )
            a( href="#" ) portfolio
          router-link( tag="li", to="/stock", activeClass="active" )
            a( href="#" ) stock

        ul.nav.navbar-nav.navbar-right
          li: a( href="#" ) end day
          li.dropdown
            a.dropdown-toggle( href="#", data-toggle="dropdown", role="button", aria-haspopup="true", aria-expanded="false" ) save / load
              span.caret
            ul.dropdown-menu
              li: a( href="#" ) save day
              li: a( href="#" ) load day

</template>

<script>
export default {
  name: 'nav'
}
</script>

<style lang="scss" scoped>
  //
</style>
