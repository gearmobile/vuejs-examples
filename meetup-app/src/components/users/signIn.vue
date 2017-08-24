<template lang="pug">

  v-container
    v-layout( row )
      v-flex( xs12, sm6, offset-sm3 )
        v-card
          v-card-text
            v-container
              // FORM
              form( @submit.prevent='onSubmit()' )
                // EMAIL
                v-layout( row )
                  v-flex( xs12 )
                    v-text-field( name='email', id='email', label='Email', type='email', v-model='signin.email', required )
                // PASSWORD
                v-layout( row )
                  v-flex( xs12 )
                    v-text-field( name='password', id='password', label='Password', type='password', v-model='signin.password', required )
                // SIGN UP
                v-layout( row )
                  v-flex( xs12 )
                    v-btn.primary( type='submit' )
                      | sign in
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { isNil } from 'lodash'

  export default {
    data () {
      return {
        signin: {
          email: null,
          password: null
        }
      }
    },
    computed: {
      ...mapGetters({
        users: 'getUsers'
      }),
      user () {
        return this.users
      }
    },
    watch: {
      user (value) {
        if (!isNil(value)) {
          this.$router.push({name: 'Home'})
        }
      }
    },
    methods: {
      ...mapActions({
        sign: 'signIn'
      }),
      onSubmit () {
        this.sign({email: this.signin.email, password: this.signin.password})
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

