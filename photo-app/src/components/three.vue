<template lang="pug">
  v-container.three( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.teal.lighten-1.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0.white--text
          | {{ title }}
      v-flex( v-for="cert in certs", :key="cert", xs12 )
        v-card.three__card.py-4( @click="onSelect(cert)", :class="{ 'teal lighten-2 white--text': active === cert.name }" )
          v-card-text.text-xs-center
            div.headline
              | {{ cert.title }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'three',
    data () {
      return {
        title: 'Формат сертификата',
        active: '',
        certs: [
          {
            name: 'cert1',
            title: 'желтый кролик',
            price: 1000
          },
          {
            name: 'cert2',
            title: 'классика в рамочке',
            price: 1200
          }
        ]
      }
    },
    methods: {
      onSelect (value) {
        eventBus.$emit('cert', value)
        this.active = value.name
      }
    },
    created () {
      eventBus.$on('clear', () => {
        this.active = ''
      })
    }
  }
</script>

<style lang="stylus" scoped>

  .three

    &__card
      cursor pointer

</style>
