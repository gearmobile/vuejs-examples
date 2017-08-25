<template lang="pug">
  v-alert( error, dismissible, :value="true", @input="onClose()", transition="scale-transition" )
    | {{ message }}
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: null
      }
    },
    methods: {
      onClose () {
        this.$emit('closed')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

