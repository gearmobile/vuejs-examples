<template lang="pug">
  v-container( fluid )
    div.text-xs-center.yellow.py-3.mb-1( style="width: 100%" )
      h2.display-1.mb-0
        | {{ title }}
    v-layout( row, wrap )
      v-flex( xs4 )
        v-subheader
          | ФИО
      v-flex( xs8 )
        v-text-field( name="name", label="name", v-model="customer.name", required )
    v-layout( row, wrap )
      v-flex( xs4 )
        v-subheader
          | Номер телефона
      v-flex( xs8 )
        v-text-field( name="phone", label="phone", v-model="customer.phone", required )
    v-layout( row, wrap )
      v-flex( xs4 )
        v-subheader
          | E-mail
      v-flex( xs8 )
        v-text-field( name="email", label="email", v-model="customer.email" )

</template>

<script>
export default {
  name: 'six',
  data () {
    return {
      title: 'оформление заказа',
      customer: {
        name: null,
        phone: null,
        email: null
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  //
</style>
