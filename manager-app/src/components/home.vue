<template lang="pug">
  
  // HOME SECTION
  #home.home
    
    // HEADER
    .page-header
      h1 Customers List

    // ALERT SECTION
    app-alert( :firstName="userFirtsName", :lastName="userLastName", :message="userMessage", v-if="alertState" )

    // INPUT SECTION
    form.home__form
      .form-group
        input.form-control( type="search", placeholder="Enter Last Name ..." )
    
    // OUTPUT SECTION
    table.table.table-striped.table-hover
      thead
        tr
          th First Name
          th Last Name
          th Email
          th Edit
      tbody
        tr( v-for="customer in customers" )
          td {{ customer.firstName }}
          td {{ customer.lastName }}
          td {{ customer.email }}
          td
            router-link( tag="a", :to="'/edit/' + customer['.key']" )
              i.fa.fa-pencil.home__edit( aria-hidden="true" )
</template>

<script>
  import ref from '../router/axios'
  import Alert from '../components/alert'

  export default {
    name: 'home',
    firebase: {
      customers: ref
    },
    data () {
      return {
        userFirtsName: '',
        userLastName: '',
        userMessage: ''
      }
    },
    components: {
      appAlert: Alert
    },
    computed: {
      alertState () {
        return this.userFirtsName && this.userLastName && this.userMessage
      }
    },
    methods: {
      //
    },
    created () {
      if (this.$route.query.name && this.$route.query.surname && this.$route.query.message) {
        this.userFirtsName = this.$route.query.name
        this.userLastName = this.$route.query.surname
        this.userMessage = this.$route.query.message
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
        color: firebrick
      }
    }
  }
</style>
