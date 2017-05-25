<template lang="pug">
  .card.card-outline-info( @click="onClick()" )
    .card-block
      h4.card-title {{ character.name }}
      p.card-text #[strong Height:] {{ character.height }}cm
      p.card-text #[strong Gender:] {{ character.gender }}
      p.card-text #[strong Hair Color:] {{ character.hair_color }}
      p.card-text #[strong Eye Color:] {{ character.eye_color }}
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
    methods: {
      onClick () {
        this.$emit('onSelect', this.character)
      }
    }
  }
</script>

<style scoped>
  .card:hover {
    background-color: rgba( 0,0,0, .2 );
    cursor: pointer;
  }
  .card-block .card-text {
    margin-bottom: .2rem;
  }
</style>
