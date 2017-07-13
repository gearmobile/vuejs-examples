<template lang="pug">
  v-container( fluid )
    div.text-xs-center.teal.lighten-1.py-3.mb-1( style="width: 100%" )
      h2.display-1.mb-0.white--text
        | {{ title }}
    v-layout( row, wrap )
      v-flex( xs4 )
        v-subheader
          | ФИО
      v-flex( xs8 )
        v-text-field( name="name", label="name", v-model="name", prepend-icon="account_box", max="50", required, hide-details )
    v-layout( row, wrap )
      v-flex( xs4 )
        v-subheader
          | Номер телефона
      v-flex( xs8 )
        v-text-field( name="phone", label="phone", v-model="phone", prepend-icon="phone", required, hide-details )
    v-layout( row, wrap )
      v-flex( xs4 )
        v-subheader
          | E-mail
      v-flex( xs8 )
        v-text-field( name="email", label="email", v-model="email", prepend-icon="email", hide-details )

</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'six',
    data () {
      return {
        title: 'Оформление заказа',
        name: '',
        phone: '',
        email: ''
      }
    },
    watch: {
      name () {
        eventBus.$emit('name', this.name)
      },
      phone () {
        eventBus.$emit('phone', this.phone)
      },
      email () {
        eventBus.$emit('email', this.email)
      }
    },
    created () {
      eventBus.$on('clrCustomer', () => {
        this.name = ''
        this.phone = ''
        this.email = ''
      })
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
