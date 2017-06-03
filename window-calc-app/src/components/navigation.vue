<template lang="pug">
  nav.navbar.navbar-default
    .container
      .navbar-header
        a.navbar-brand(href='#') Тип окна
      #navbar.collapse.navbar-collapse
        ul.nav.navbar-nav
          router-link( tag="li", to="/", active-class="active", exact ): a( href="#" ) single window
          router-link( tag="li", to="/doublewindow", active-class="active" ): a( href="#" ) double window
          router-link( tag="li", to="/threewindow", active-class="active" ): a( href="#" ) three window
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style lang="scss" scoped>
  //
</style>
