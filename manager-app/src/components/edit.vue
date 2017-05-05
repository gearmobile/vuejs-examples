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
        key: this.$route.params.key,
        message: 'updated'
      }
    },
    methods: {
      onEdit (item) {
        // https://github.com/vuejs/vuefire
        if (!this.customer.firstName || !this.customer.lastName || !this.customer.email) {
          alert('Please fill all fields!')
        } else {
          ref.child(item['.key']).set(item)
          this.$router.push({ path: '/', query: { name: this.customer.firstName, surname: this.customer.lastName, message: this.message } })
          for (let key in this.customer) {
            this.customer[key] = null
          }
        }
      },
      findCustomer (value) {
        for (let i = 0; i < this.customers.length; i += 1) {
          if (this.customers[i]['.key'] === value) {
            this.customer.firstName = this.customers[i].firstName
            this.customer.lastName = this.customers[i].lastName
            this.customer.email = this.customers[i].email
            this.customer.phone = this.customers[i].phone
            this.customer.address = this.customers[i].address
            this.customer.city = this.customers[i].city
            this.customer.state = this.customers[i].state
          }
        }
      }
    },
    created () {
      this.findCustomer(this.key)
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
