<template lang="pug">
  .card-group
    .card
      //- img.card-img-top(src='...', alt='Card image cap')
      .card-block
        h4.card-title {{ character.name }}
        p.card-text
          | This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        p.card-text
          small.text-muted Last updated 3 mins ago
</template>

<script>
  export default {
    name: 'card',
    props: {
      character: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        //
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
