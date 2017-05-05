<template lang="pug">
  form#edit( @submit.prevent="onEdit" )
    .page-header
      h2 Edit
    
    // CUSTOMER INFO
    .panel.panel-default
      .panel-heading
        h2.panel-title Customer Info
      .panel-body
        .form-group
          label( for="firstName" ) First Name
          input.form-control( name="firstName", type="text", placeholder="First Name", v-model.trim="customer.firstName", required )
        .form-group
          label( for="lastName" ) Last Name
          input.form-control( name="lastName", type="text", placeholder="Last Name", v-model.trim="customer.lastName", required )
      
      // CUSTOMER CONTACT
      .panel.panel-default
        .panel-heading
          h2.panel-title Customer Contact
        .panel-body
          .form-group
            label( for="email" ) Email
            input.form-control( name="email", type="email", placeholder="Email", v-model.trim="customer.email", required )
          .form-group
            label( for="phone" ) Phone
            input.form-control( name="phone", type="phone", placeholder="Phone", v-model.trim="customer.phone" )

      // CUSTOMER LOCATION
      .panel.panel-default
        .panel-heading
          h2.panel-title Customer Location
        .panel-body
          .form-group
            label( for="address" ) Address
            input.form-control( name="address", type="text", placeholder="Address", v-model.trim="customer.address" )
          .form-group
            label( for="city" ) City
            input.form-control( name="city", type="text", placeholder="City", v-model.trim="customer.city" )
          .form-group
            label( for="state" ) State
            input.form-control( name="state", type="text", placeholder="State", v-model.trim="customer.state" )

    // SUBMIT FORM
    button.btn.btn-default( type="submit" ) Send Data
</template>

<script>
  import ref from '../router/axios'

  export default {
    name: 'edit',
    firebase: {
      customers: ref
    },
    data () {
      return {
        customer: {
          firstName: null,
          lastName: null,
          email: null,
          phone: null,
          address: null,
          city: null,
          state: null
        },
        key: '-KiLwEBCr8E50KAFqXyh'
      }
    },
    methods: {
      onEdit () {
        //
      },
      findCustomer (value) {
        for (let key in this.customers) {
          if (this.customers[key] === value) {
            console.log('found')
          }
        }
      },
      created () {
        this.findCustomer(this.key)
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
