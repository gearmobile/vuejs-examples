<template lang="pug">

  v-app

    // DRAWER
    v-navigation-drawer( v-model="showDrawer", temporary )
      v-list
        v-list-tile( v-for="item in items", :key="item.title", :to="item.link" )
          v-list-tile-action
            v-icon
              | {{ item.icon }}
          v-list-tile-content
            | {{ item.title }}
    
    // TOOLBAR
    v-toolbar.primary( dark )
      v-toolbar-side-icon.hidden-sm-and-up( @click.stop="onDrawer()" )
      v-toolbar-title
        router-link( to='/', tag="span" )
          | meetup app
      v-spacer
      v-toolbar-items.hidden-sm-and-down( v-for="item in items", :key="item.title" )
        v-btn( flat, :to="item.link" )
          v-icon( left )
            | {{ item.icon }}
          | {{ item.title }}

    router-view

</template>

<script>
  import { mapGetters } from 'vuex'
  import { isNil } from 'lodash'

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
    },
    computed: {
      ...mapGetters({
        users: 'getUsers'
      }),
      userAuthTrue () {
        if (!isNil(this.users)) {
          return true
        }
      },
      items () {
        let items = null
        if (this.userAuthTrue) {
          items = [
            { icon: 'supervisor_account', title: 'meetups', link: '/meetup' },
            { icon: 'room', title: 'new meetup', link: '/meetup/new' },
            { icon: 'person', title: 'profile', link: '/profile' }
          ]
        } else {
          items = [
            { icon: 'face', title: 'sign up', link: '/signup' },
            { icon: 'lock_open', title: 'sign in', link: '/signin' }
          ]
        }
        return items
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
