<template lang="pug">
  v-container.three( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.yellow.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0
          | {{ title }}
      v-flex( v-for="cert in certs", :key="cert", xs6 )
        v-card.three__card.py-4( @click="onSelect(cert)" )
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
        title: 'формат сертификата',
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
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .three

    &__card
      cursor pointer

</style>
