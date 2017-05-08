<template lang="pug">
  .container
    .jumbotron
      h3.text-center search for any movie
      form
        input.form-control( type="text", placeholder="search movie here ..." )
</template>

<script>
  export default {
    name: 'search'
  }
</script>

<style lang="scss" scoped>
//
</style>
