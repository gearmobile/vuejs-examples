<template lang='pug'>
  #home.container
    app-alert( :warning="warning" )
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

  export default {
    name: 'home',
    firebase: {
      customers: ref
    },
    data () {
      return {
        customers: [],
        warning: 'warning'
      }
    },
    components: {
      appAlert: Alert
    }
  }
</script>

<style lang='scss' scoped>
// 
</style>
