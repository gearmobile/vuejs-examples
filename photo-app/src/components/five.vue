<template lang="pug">
  v-container.five( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.yellow.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0
          | {{ title }}
      v-flex( v-for="shipping in shippings", :key="shipping", xs12 )
        v-card.five__card.py-2( @click="onSelect(shipping)", :class="{ 'yellow': active === shipping.name }" )
          v-card-text.text-xs-center
            div.headline
              | {{ shipping.title }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'five',
    data () {
      return {
        title: 'как сертификат попадет к вам?',
        active: '',
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
    },
    methods: {
      onSelect (value) {
        eventBus.$emit('shipping', value)
        this.active = value.name
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .five

    &__card
      cursor pointer

</style>
