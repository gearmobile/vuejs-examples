<template lang="pug">
  #home.home
    
    // header
    .page-header
      h1 Customers List

    // input section
    form.home__form
      .form-group
        input.form-control( type="search", placeholder="Enter Last Name ..." )
    
    // output section
    table.table.table-striped.table-hover
      thead
        tr
          th First Name
          th Last Name
          th Email
          th Edit
      tbody
        tr( v-for="(customer, index) in customers" )
          td {{ customer.firstName }}
          td {{ customer.lastName }}
          td {{ customer.email }}
          td: i.fa.fa-pencil.home__edit( aria-hidden="true", @click="onEdit(index)" )
</template>

<script>
  import ref from '../router/axios.js'

  export default {
    name: 'home',
    firebase: {
      customers: ref
    },
    data () {
      return {
        //
      }
    },
    methods: {
      onEdit (index) {
        //
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {

    &__form {
      margin-bottom: 3rem;
    }

    &__edit {
      cursor: pointer;

      &:hover {
        color: teal;
      }
    }
  }
</style>
