<template lang="pug">
  #app
    app-nav
    router-view
</template>

<script>
  import Nav from './components/navigation.vue'

  export default {
    name: 'app',
    components: {
      appNav: Nav
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-bottom: 80px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
  .section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
      font-size: 10rem;
      color: black;
      display: block;
      width: 960px;
      text-transform: capitalize;
    }
  }
</style>
