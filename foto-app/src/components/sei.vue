<template lang="pug">
  .c
    header.sei__header
      h3.text-uppercase
        | оформление <strong>заказа</strong>
    main.sei__main
      form.form-horizontal
        .form-group
          label.col-sm-4.control-label( for="name" ) ФИО
          .col-sm-8
            input.form-control( id="name", name="name", type="text", v-model="user.name" )
        .form-group
          label.col-sm-4.control-label( for="phone" ) Номер телефона
          .col-sm-8
            input.form-control( id="phone", name="phone", type="text", v-model="user.phone" )
        .form-group
          label.col-sm-4.control-label( for="email" ) E-mail
          .col-sm-8
            input.form-control( id="email", name="email", type="text", v-model="user.email" )
    // TODO - add vue-mask
    // https://vuejs-tips.github.io/vue-the-mask/
</template>

<script>
  import { mapActions } from 'vuex'

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

      &:hover
      &--active
        color #333
        background-color #e4e4e4

</style>
