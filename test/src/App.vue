<template lang="pug">
  #app
    img( src="./assets/logo.png" )
    //- img( :src="pathImage" )
    hello
</template>

<script>
  import Hello from './components/Hello'
  import { mapGetters } from 'vuex'

  export default {
    name: 'app',
    components: {
      Hello
    },
    computed: {
      ...mapGetters({
        pathImage: 'getImage'
      })
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
