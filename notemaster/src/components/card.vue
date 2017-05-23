<template lang="pug">
  .alert.alert-info.box
    span.glyphicon.glyphicon-remove.box__button( @click="onClose()" )
    h3.text-capitalize {{ note.title }}
    small {{ note.date }}
    p {{ note.body }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    props: {
      note: {
        type: Object,
        default: null
      }
    },
    methods: {
      onClose () {
        eventBus.$emit('onRemove', this.note)
      }
    }
  }
</script>

<style scoped>
  .box__button {
    float: right;
    cursor: pointer;
  }
  .box__button:hover {
    color: firebrick;
  }
</style>
