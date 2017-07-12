<template lang="pug">
  v-container.two( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.teal.lighten-1.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0.white--text
          | {{ title }}
      v-flex( v-for="service in services", :key="service", xs6 )
        v-card.two__card.py-4( @click="onSelect(service)", :class="{ 'teal lighten-2 white--text': active === service.name }" )
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
        title: 'Добавим дополнительные услуги?',
        active: '',
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
        this.active = value.name
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .two

    &__card
      cursor pointer

</style>
