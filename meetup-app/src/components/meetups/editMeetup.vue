<template lang="pug">
  v-layout( row, justify-center )
     v-dialog( persistent )
      v-btn.accent( slot="activator", fab, dark )
        v-icon( dark )
          | edit
</template>

<script>
  export default {
    name: 'editMeetup'
  }
</script>

<style lang="stylus" scoped>
    //
</style>

