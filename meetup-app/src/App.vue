<template lang="pug">

  v-app

    v-navigation-drawer( v-model="showSide" )
      v-list
        v-list-tile
          v-list-tile-action
            v-icon
              | supervisor_account
          v-list-tile-content
            | view meetup

    v-toolbar
      v-toolbar-side-icon.hidden-sm-and-up( @click.native.stop="showSide = !showSide" )
      v-toolbar-title
        | MeetupApp
      v-spacer
      v-toolbar-items.hidden-xs-only
        v-btn( flat )
          v-icon( left )
            | supervisor_account
          | view meetups

    main

</template>

<script>
  export default {
    data () {
      return {
        showSide: false
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
