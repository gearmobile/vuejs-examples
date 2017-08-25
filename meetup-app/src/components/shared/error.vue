<template lang="pug">
  v-alert( error, dismissible, :value="true", @input="onClose()", transition="scale-transition" )
    | This is an error alert with no icon
</template>

<script>
  export default {
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

