<template lang="pug">
  nav.navbar.navbar-default
    .container
      .navbar-header
        a.navbar-brand( href="/" ) Stocker Trader
      .navbar-collapse.collapse
        ul.nav.navbar-nav
          router-link( to="/portfolio", tag="li", activeClass="active" ): a( href="#" ) portfolio
          router-link( to="/stock", tag="li", activeClass="active" ): a( href="#" ) stock
        ul.nav.navbar-nav.navbar-right
          router-link( to="/about", tag="li", activeClass="active" ): a( href="#" ) about
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped>
  /**/
</style>
