<template lang="pug">
  //- #navigation
  ul.nav.justify-content-center
    router-link.nav-item( to="/", tag="li", classActive="active", exact ): a.nav-link( href="#" ) home
    router-link.nav-item( to="/brands", tag="li" ): a.nav-link( href="#" ) brands
    router-link.nav-item( to="/blog", tag="li" ): a.nav-link( href="#" ) blog
    router-link.nav-item( to="/contacts", tag="li" ): a.nav-link( href="#" ) contacts
    router-link.nav-item( to="/projects", tag="li" ): a.nav-link( href="#" ) projects
    //- p {{ msg }}
</template>

<script>
  // import ref from '../data/config.js'

  export default {
    name: 'navigation',
    // firebase: {
    //   posts: ref
    // },
    data () {
      return {
        // msg: 'blog'
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
