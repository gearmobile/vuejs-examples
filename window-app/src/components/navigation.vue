<template lang="pug">
  nav.navbar.navbar-inverse.navbar-fixed-top
    .container
      // data-toggle='collapse', data-target='#navbar', aria-expanded='false', aria-controls='navbar'
      .navbar-header
        button.navbar-toggle(type='button', :class="{ 'collapsed': !show }", @click="show = !show")
          span.sr-only Toggle navigation
          span.icon-bar
          span.icon-bar
          span.icon-bar
        a.navbar-brand(href='#') Window Calculator
      #navbar.collapse.navbar-collapse( :class="{ 'in': show }" )
        ul.nav.navbar-nav
          router-link( tag="li", to="/", active-class="active", exact ): a(href="#") Single Window
          router-link( tag="li", to="/doublewindow", active-class="active" ): a(href="#") Double Window
          router-link( tag="li", to="/triplewindow", active-class="active" ): a(href="#") Triple Window
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
