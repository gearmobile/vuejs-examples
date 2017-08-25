<template lang="pug">
  
  v-container
    // ERROR
    v-layout( row, v-if="error" )
      v-flex( xs12, sm6, offset-sm3 )
        app-error( @closed="onTrigger()", :message="error.message" )
    // MAIN SECTION
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
                    v-text-field( name='email', id='email', label='Email', type='email', v-model='signup.email', required )
                // PASSWORD
                v-layout( row )
                  v-flex( xs12 )
                    v-text-field( name='password', id='password', label='Password', type='password', v-model='signup.password', required )
                // CONFIRM PASSWORD
                v-layout( row )
                  v-flex( xs12 )
                    v-text-field( name='confirmPassword', id='confirmPassword', label='Confirm Password', type='password', v-model='signup.confirm', :rules='[comparePassword]' )
                // SIGN UP
                v-layout( row )
                  v-flex( xs12 )
                    v-btn.primary( type='submit', :disabled="loading", :loading="loading" )
                      | sign up
                      span.loading( slot="loader" )
                        v-icon( light )
                          | cached
</template>

<script>
  import error from '../shared/error.vue'
  import { mapActions, mapGetters } from 'vuex'
  import { isNil } from 'lodash'

  export default {
    data () {
      return {
        signup: {
          email: null,
          password: null,
          confirm: null
        }
      }
    },
    computed: {
      ...mapGetters({
        users: 'getUsers',
        error: 'getErrorState',
        loading: 'getLoadingState'
      }),
      user () {
        return this.users
      },
      comparePassword () {
        return this.signup.password !== this.signup.confirm ? 'Passwords do not match' : ''
      }
    },
    methods: {
      ...mapActions({
        sign: 'signUp',
        clear: 'clearError'
      }),
      onSubmit () {
        this.sign({email: this.signup.email, password: this.signup.password})
      },
      onTrigger () {
        this.clear()
      }
    },
    watch: {
      user (value) {
        if (!isNil(value)) {
          this.$router.push({name: 'Home'})
        }
      }
    },
    components: {
      appError: error
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

