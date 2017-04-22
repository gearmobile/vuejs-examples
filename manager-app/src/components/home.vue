<template lang='pug'>
  #home.container
    app-alert( :warning="info", v-if="info" )
    h1.page-header Manager Customers
    table.table.table-striped
      thead
        tr
          th First Name
          th Last Name
          th Email
      tbody
        tr( v-for="(item, index) in customers" :key="index" )
          td {{ item.firstName }}
          td {{ item.lastName }}
          td {{ item.email }}
</template>

<script>
  import ref from '../router/axios'
  import Alert from './alert'
  // import { eventBus } from '../router/event-bus.js'

  export default {
    name: 'home',
    firebase: {
      customers: ref
    },
    data () {
      return {
        customers: [],
        info: ''
      }
    },
    components: {
      appAlert: Alert
    },
    created () {
      if (this.$route.query.alert) {
        this.info = this.$route.query.alert
      }
    }
    // created () {
    //   eventBus.$on('sendAlert', data => {
    //     this.warning = data
    //   })
    // }
  }
</script>

<style lang='scss' scoped>
// 
</style>
