<template lang="pug">
  #app.container
    .row
      .col-md-12
        ul.nav.justify-content-center
          router-link.nav-item( to="/", tag="li", classActive="active", exact ): a.nav-link( href="#" ) home
          router-link.nav-item( to="/brands", tag="li" ): a.nav-link( href="#" ) brands
          router-link.nav-item( to="/contacts", tag="li" ): a.nav-link( href="#" ) contacts
          router-link.nav-item( to="/projects", tag="li" ): a.nav-link( href="#" ) projects
    .row
      .col-md-12
        <router-view></router-view>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      getData () {
        this.$http.get('https://spa-simple.firebaseio.com/data.json').then(response => { console.log(response.body) })
      }
    },
    created () {
      //
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
