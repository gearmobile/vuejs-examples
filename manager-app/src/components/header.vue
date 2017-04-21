<template lang="pug">
  #header
    nav.nav
      .nav-left
        router-link.nav-item( to="/" ) customers app
        router-link.nav-item( to="/" ) home
        router-link.nav-item( to="/about" ) about
      .nav-right
        router-link.nav-item( to="/add" ) add customer
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
  .nav {
    background-color: #eee;

    & .nav-item {
      text-transform: capitalize;
    }
  }
</style>
