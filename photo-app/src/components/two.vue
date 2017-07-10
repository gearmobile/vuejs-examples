<template lang="pug">
  v-container.two( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.yellow.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0
          | {{ title }}
      v-flex( v-for="service in services", :key="service", xs6 )
        v-card.two__card.py-4( @click="onSelect(service)" )
          v-card-text.text-xs-center
            div.headline
              | {{ service.title }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'two',
    data () {
      return {
        title: 'добавим дополнительные услуги?',
        services: [
          {
            name: 'service1',
            title: 'макияж',
            price: 200
          },
          {
            name: 'service2',
            title: 'аренда платья',
            price: 300
          },
          {
            name: 'service3',
            title: 'прическа',
            price: 400
          },
          {
            name: 'service4',
            title: 'хаски',
            price: 500
          }
        ]
      }
    },
    methods: {
      onSelect (value) {
        eventBus.$emit('service', value)
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .two

    &__card
      cursor pointer

</style>
