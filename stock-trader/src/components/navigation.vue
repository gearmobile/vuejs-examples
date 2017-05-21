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
          li: a( href='#', @click="onEnd()" ) End Day
          li.dropdown
            a.dropdown-toggle(href='#', data-toggle='dropdown', role='button', aria-haspopup='true', aria-expanded='false', @click="onShow()") Save & Load 
              span.caret
            ul.dropdown-menu( :style="{ display: isShow }" )
              li: a(href='#') Save
              li: a(href='#') Load
          li: a( href="#" ) #[strong Funds: {{ funds | divider }}]
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'navigation',
    data () {
      return {
        toggle: false
      }
    },
    computed: {
      ...mapGetters({
        funds: 'getFunds'
      }),
      isShow () {
        return this.toggle ? 'block' : 'none'
      }
    },
    methods: {
      ...mapActions({
        saveState: 'saveStocks',
        loadState: 'loadStocks',
        randomStocks: 'randomizeStocks'
      }),
      onShow () {
        this.toggle = !this.toggle
      },
      onEnd () {
        this.randomStocks()
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
