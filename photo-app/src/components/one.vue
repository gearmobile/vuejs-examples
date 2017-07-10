<template lang="pug">
  v-container.one( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.yellow.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0
          | {{ title }}
      v-flex( v-for="time in times", :key="time", xs6 )
        v-card.one__card.py-4( @click="onSelect(time.price)" )
          v-card-text.text-xs-center
            div.headline
              | {{ time.value }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'one',
    data () {
      return {
        title: 'сколько будет длиться фотосессия?',
        times: [
          {
            name: 'time1',
            value: 1,
            price: 1300
          },
          {
            name: 'time2',
            value: 1.5,
            price: 1900
          },
          {
            name: 'time3',
            value: 2,
            price: 2400
          },
          {
            name: 'time4',
            value: 3,
            price: 3500
          }
        ]
      }
    },
    methods: {
      onSelect (value) {
        eventBus.$emit('time', value)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  
  .one

    &__card
      cursor pointer

</style>
