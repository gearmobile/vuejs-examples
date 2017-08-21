<template lang="pug">
  v-app

    // DRAWER
    v-navigation-drawer.hidden-sm-and-up( v-model="showDrawer" )
      v-list
        v-list-tile
          v-list-tile-action
            v-icon
              | supervisor_account
          v-list-tile-content
            | meetups
    
    // TOOLBAR
    v-toolbar.primary( dark )
      v-toolbar-side-icon( @click.stop="onDrawer()" )
      v-toolbar-title
        | meetup app
      v-spacer
      v-toolbar-items.hidden-sm-and-down
        v-btn( flat )
          v-icon( left )
            | supervisor_account
          | meetups
        v-btn( flat )
          v-icon( left )
            | create
          | new meetup
        v-btn( flat )
          v-icon( left )
            | collections
          | profile

</template>

<script>
  export default {
    data () {
      return {
        showDrawer: false
      }
    },
    methods: {
      onDrawer () {
        this.showDrawer = !this.showDrawer
      }
    }
  }
</script>

<style lang="stylus">

  @import './stylus/main'

  @media screen and ( max-width 768px )
    .hiddenItems
      display none

  @media screen and ( min-width 768px )
    .hiddenDrawer
      display none

</style>
