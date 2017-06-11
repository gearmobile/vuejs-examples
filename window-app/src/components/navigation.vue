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
        a.navbar-brand(href='#') Project name
      #navbar.collapse.navbar-collapse( :class="{ 'in': show }" )
        ul.nav.navbar-nav
          li.active
            a(href='#') Home
          li
            a(href='#about') About
          li
            a(href='#contact') Contact
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
