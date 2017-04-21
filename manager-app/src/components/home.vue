<template lang="pug">
  #home
    nav.panel
      p.panel-heading Customers
      .panel-block
        p.control.has-icon-left
          input.input.is-large( type="text", placeholder="Enter Last Name ..." )
      .panel-block
        table.is-striped

</template>

<script>
  const url = 'https://customermanagerapp.firebaseio.com/customers'

  export default {
    name: 'home',
    data () {
      return {
        msg: 'home'
      }
    },
    created () {
      this.axios.get(url)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
</script>

<style lang="scss" scoped>
// 
</style>
