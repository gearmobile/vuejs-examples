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
        v-text-field( name="name", label="name", required )
    v-layout( row, wrap )
      v-flex( xs4 )
        v-subheader
          | Номер телефона
      v-flex( xs8 )
        v-text-field( name="phone", label="phone", required )
    v-layout( row, wrap )
      v-flex( xs4 )
        v-subheader
          | E-mail
      v-flex( xs8 )
        v-text-field( name="email", label="email", required )

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'оформление заказа'
    }
  }
}
</script>

<style lang="stylus" scoped>
  //
</style>
