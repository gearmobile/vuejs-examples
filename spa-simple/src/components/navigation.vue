<template lang="pug">
  ul.nav.justify-content-center
    router-link.nav-item( to="/", tag="li", classActive="active", exact ): a.nav-link( href="#" ) home
    router-link.nav-item( to="/brands", tag="li" ): a.nav-link( href="#" ) brands
    router-link.nav-item( to="/blog", tag="li" ): a.nav-link( href="#" ) blog
    router-link.nav-item( to="/contacts", tag="li" ): a.nav-link( href="#" ) contacts
    router-link.nav-item( to="/projects", tag="li" ): a.nav-link( href="#" ) projects
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style scoped>
  /**/
</style>
