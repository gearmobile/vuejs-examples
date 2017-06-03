<template lang="pug">
  nav.navbar.navbar-default
    .container
      .navbar-header
        //- button.navbar-toggle.collapsed(type='button', data-toggle='collapse', data-target='#navbar', aria-expanded='false', aria-controls='navbar')
        //-   span.sr-only Toggle navigation
        //-   span.icon-bar
        //-   span.icon-bar
        //-   span.icon-bar
        a.navbar-brand(href='#') Тип окна
      #navbar.collapse.navbar-collapse
        ul.nav.navbar-nav
          //- li.active
          //-   a(href='#') Home
          //- li
          //-   a(href='#about') About
          //- li
          //-   a(href='#contact') Contact
          router-link( tag="li", to="/", active-class="active", exact ): a( href="#" ) single window
          router-link( tag="li", to="/doublewindow", active-class="active" ): a( href="#" ) double window
          router-link( tag="li", to="/threewindow", active-class="active" ): a( href="#" ) three window
</template>

<script>
  export default {
    name: 'navigation',
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
