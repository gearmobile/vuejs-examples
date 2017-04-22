<template lang="pug">
  #add
    h1.page-header Add Customer
    form( @submit.prevent="addCustomer" )

      // CUSTOMER INFO
      .well
        h4 Customer Info
        .form-group
          label( for="firstName" ) first name
          input.form-control( id="firstName", type="text", placeholder="First Name", v-model="customer.firstName" )
        .form-group
          label( for="lastName" ) last name
          input.form-control( id="lastName", type="text", placeholder="Last Name", v-model="customer.lastName" )

      // CUSTOMER CONTACT
      .well
        h4 Customer Contact
        .form-group
          label( for="email" ) email
          input.form-control( id="email", type="email", placeholder="Email", v-model="customer.email" )
        .form-group
          label( for="phone" ) phone
          input.form-control( id="phone", type="text", placeholder="Phone", v-model="customer.phone" )

      // CUSTOMER LOCATION
      .well
        h4 Customer Location
        .form-group
          label( for="address" ) address
          input.form-control( id="address", type="text", placeholder="Address", v-model="customer.address" )
        .form-group
          label( for="city" ) city
          input.form-control( id="city", type="text", placeholder="City", v-model="customer.city" )
        .form-group
          label( for="state" ) state
          input.form-control( id="state", type="text", placeholder="State", v-model="customer.state" )

      // SUBMIT DATA
      button.btn.btn-default( type="submit" ) submit
</template>

<script>
  import ref from '../router/axios'
  
  export default {
    name: 'add',
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
        }
      }
    },
    methods: {
      addCustomer () {
        if (!this.customer.firstName || !this.customer.lastName || !this.customer.email) {
          console.log('Please fill in all required fields!')
        } else {
          ref.push(this.customer)
          for (let key in this.customer) {
            this.customer[key] = null
          }
          this.$router.push({ path: '/' })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    color: white;
  }
</style>
