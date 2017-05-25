<template lang="pug">
  .card.card-outline-info( @click="onClick()" )
    .card-block
      h4.card-title {{ character.name }}
      p.card-text
        | This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      p.card-text
        small.text-muted Last updated 3 mins ago
    //- .overlay( :mousemove="onOver()" )
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
    },
    methods: {
      onClick () {
        this.$emit('onSelect', this.character)
      },
      onOver () {
        console.log('over')
      }
    }
  }
</script>

<style scoped>
  .overlay {
    position: absolute;
    /*display: none;*/
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba( 0,0,0, .5 );
    z-index: 2;
    cursor: pointer;
  }
</style>
