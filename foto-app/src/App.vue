<template lang="pug">
  #app.container
    .row
      .col-md-8.col-md-offset-2
        h2 Заказать подарочный сертификат на фотосессию
        .row
          .col-md-12
            app-nav
        .row
          .col-md-8
            router-view
          .col-md-4
            app-output
        .row
          .col-md-12
            app-pag
</template>

<script>
  import Nav from './components/navigation.vue'
  import Output from './components/output.vue'
  import Pag from './components/pagination.vue'
  
  export default {
    name: 'app',
    components: {
      appNav: Nav,
      appOutput: Output,
      appPag: Pag
    }
  }
</script>

<style lang="stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
