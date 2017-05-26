<template lang="pug">
  nav.nav.has-shadow
    .nav-left
      a.nav-item
        img( src="http://bulma.io/images/bulma-logo.png", alt="SPA" )
    .nav-right
      router-link.nav-item( to="/", tag="a", active-class="is-active", exact ) home
      router-link.nav-item( to="/brands", tag="a", active-class="is-active" ) brands
      router-link.nav-item( to="/blog", tag="a", active-class="is-active" ) blog
      router-link.nav-item( to="/contacts", tag="a", active-class="is-active" ) contacts
      router-link.nav-item( to="/projects", tag="a", active-class="is-active" ) projects
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    width: 100%;
  }
  .nav-item {
    text-transform: capitalize;
  }
</style>
