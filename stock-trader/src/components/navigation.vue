<template lang="pug">
  nav.navbar.navbar-default
    .container-fluid
      .navbar-header
        router-link.navbar-brand( tag='a', to='/' ) Stocker Trader
      .collapse.navbar-collapse
        ul.nav.navbar-nav
          router-link( tag='li', to='/portfolio', activeClass='active' ): a( href='#' ) Portfolio
          router-link( tag='li', to='/stock', activeClass='active' ): a( href='#' ) Stock
        ul.nav.navbar-nav.navbar-right
          li: a(href='#') End Day
          li.dropdown
            a.dropdown-toggle(href='#', data-toggle='dropdown', role='button', aria-haspopup='true', aria-expanded='false') Save & Load 
              span.caret
            ul.dropdown-menu
              li: a(href='#') Save
              li: a(href='#') Load
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style scoped>
  /**/
</style>
