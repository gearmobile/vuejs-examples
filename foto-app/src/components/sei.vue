<template lang="pug">
  .sei
    header.sei__header
      h3.text-uppercase
        | оформление <strong>заказа</strong>
    main.sei__main
      form.form-horizontal
        .form-group
          label.col-sm-4.control-label( for="name" ) ФИО
          .col-sm-8
            //- input.form-control( id="name", name="name", type="text", v-model="user.name" )
            //- input.form-control( id="name", name="name", type="text", v-model="user.name" )
            input.form-control( v-validate="'required|alpha'", :class="{'input': true, 'is-danger': errors.has('name') }", id="name", name="name", type="text", v-model="user.name" )
            span( v-show="errors.has('name')" class="help is-danger") {{ errors.first('name') }}
        .form-group
          label.col-sm-4.control-label( for="phone" ) Номер телефона
          .col-sm-8
            //- input.form-control( id="phone", name="phone", type="text", v-model="user.phone" )
            //- the-mask.form-control( :mask="['+7 (###) ###-####']", id="phone", name="phone", type="text", v-model="user.phone" )
            input.form-control( v-validate="'required|digits:11'", :class="{'input': true, 'is-danger': errors.has('phone') }", id="phone", name="phone", type="text", v-model="user.phone" )
            span( v-show="errors.has('phone')" class="help is-danger") {{ errors.first('phone') }}
        .form-group
          label.col-sm-4.control-label( for="email" ) E-mail
          .col-sm-8
            //- input.form-control( id="email", name="email", type="text", v-model="user.email" )
            input.form-control( v-validate="'required|email'", :class="{'input': true, 'is-danger': errors.has('email') }", id="email", name="email", type="text", v-model="user.email" )
            span( v-show="errors.has('email')" class="help is-danger") {{ errors.first('email') }}
</template>

<script>
  import { mapActions } from 'vuex'
  // import TheMask from 'vue-the-mask'

  export default {
    name: 'sei',
    data () {
      return {
        user: {
          name: null,
          phone: null,
          email: null
        }
      }
    },
    methods: {
      ...mapActions({
        getDetails: 'getCustomerDetails'
      }),
      onSelect () {
        this.getDetails(this.user)
      }
    },
    components: {
      // TheMask
    }
  }
</script>

<style lang="stylus" scoped>

  .sei

    &__header
      background-color #f6e95f
      padding 2rem 0
      margin-bottom .6rem

    &__card
      margin-bottom 1rem

    &__tile
      cursor pointer
      font-size 30px
      display flex
      justify-content center
      align-items center
      background-color #ebebeb
      color #828282
      line-height 80px

      & .active
        color #333
        background-color #e4e4e4

    & .help.is-danger
      text-align left
      color firebrick
      font-style italic

</style>
