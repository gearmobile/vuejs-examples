<template lang="pug">
  #add.form
    
    // header
    .page-header
      h2 Add Customer
    
    // customer info
    .panel.panel-default
      .panel-heading
        h2.panel-title Customer Info
      .panel-body
        .form-group
          label( for="firstName" ) First Name
          input.form-control( name="firstName", type="text", placeholder="First Name" )
        .form-group
          label( for="lastName" ) Last Name
          input.form-control( name="lastName", type="text", placeholder="Last Name" )
    
    // customer contact
    .panel.panel-default
      .panel-heading
        h2.panel-title Customer Contact
      .panel-body
        .form-group
          label( for="email" ) Email
          input.form-control( name="email", type="email", placeholder="Email" )
        .form-group
          label( for="phone" ) Phone
          input.form-control( name="phone", type="phone", placeholder="Phone" )

    // customer location
    .panel.panel-default
      .panel-heading
        h2.panel-title Customer Location
      .panel-body
        .form-group
          label( for="address" ) Address
          input.form-control( name="address", type="text", placeholder="Address" )
        .form-group
          label( for="city" ) City
          input.form-control( name="city", type="text", placeholder="City" )
        .form-group
          label( for="state" ) State
          input.form-control( name="state", type="text", placeholder="State" )
    
    // submit form
    button.btn.btn-default( type="submit" ) Send Data
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
  //
</style>
