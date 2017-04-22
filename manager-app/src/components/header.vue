<template lang="pug">
  nav.navbar.navbar-default
    .container
      .navbar-header
        router-link.navbar-brand( to="/" ) Customer Manager
      .collapse.navbar-collapse#navbar
        ul.nav.navbar-nav
          router-link( tag="li", to="/", activeClass="active", exact ): a( href="#" ) Home
          router-link( tag="li", to="/about", activeClass="active" ): a( href="#" ) About
        ul.nav.navbar-nav.navbar-right
          router-link( tag="li", to="/add", acticeClass="active" ): a( href="#" ) Add Customer
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss" scoped>
// 
</style>
