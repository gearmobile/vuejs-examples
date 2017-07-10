<template lang="pug">
  v-container( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.yellow.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0
          | {{ title }}
      v-flex( v-for="shipping in shippings", :key="shipping", xs12 )
        v-card.py-2
          v-card-text.text-xs-center
            div.headline
              | {{ shipping.title }}
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'как сертификат попадет к вам?',
      shippings: [
        {
          name: 'shipping1',
          title: 'Самовывоз',
          price: 500
        },
        {
          name: 'shipping2',
          title: 'Доставка в отделение почты',
          price: 600
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  //
</style>
