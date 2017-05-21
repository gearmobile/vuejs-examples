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
              li: a( href='#', @click="onSave()" ) Save
              li: a( href='#', @click="onLoad()" ) Load
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
        funds: 'getFunds',
        portfolioStocks: 'getPortfolioStocks',
        originalStocks: 'getStocks'
      }),
      isShow () {
        return this.toggle ? 'block' : 'none'
      }
    },
    methods: {
      ...mapActions({
        randomStocks: 'randomizeStocks',
        loadRemoteState: 'loadData'
      }),
      onShow () {
        this.toggle = !this.toggle
      },
      onEnd () {
        this.randomStocks()
      },
      onLoad () {
        this.loadRemoteState()
      },
      onSave () {
        const data = {
          funds: this.funds,
          portfolioStocks: this.portfolioStocks,
          originalStocks: this.originalStocks
        }
        this.$http.put('stocks.json', data)
      }
    }
  }
</script>
