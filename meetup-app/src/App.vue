<template lang="pug">

  // ROOT
  v-app

    // SIDEBAR PANEL
    v-navigation-drawer( v-model="showSide" )
      v-list
        v-list-tile( v-for="item in items", :key="item.title" )
          v-list-tile-action
            v-icon
              | {{ item.icon }}
          v-list-tile-content
            | {{ item.title }}

    // TOOLBAR
    v-toolbar
      v-toolbar-side-icon.hidden-sm-and-up( @click.native.stop="showSide = !showSide" )
      v-toolbar-title
        | MeetupApp
      v-spacer
      v-toolbar-items.hidden-xs-only
        v-btn( flat, v-for="item in items", :key="item.title" )
          v-icon( left )
            | {{ item.icon }}
          | {{ item.title }}

    // MAIN
    main
      router-view

</template>

<script>
  export default {
    data () {
      return {
        showSide: false,
        items: [
          { icon: 'supervisor_account', title: 'view meetup', link: '/meetup' },
          { icon: 'room', title: 'organize meetup', link: '/meetup/new' },
          { icon: 'person', title: 'profile', link: '/profile' },
          { icon: 'face', title: 'sign up', link: '/signup' },
          { icon: 'lock_open', title: 'sign in', link: '/signin' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
