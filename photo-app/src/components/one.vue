<template lang="pug">
  v-container.one( fluid, grid-list-sm )
    v-layout( row, wrap )
      div.text-xs-center.teal.lighten-1.py-3.mb-2( style="width: 100%" )
        h2.display-1.mb-0.white--text
          | {{ title }}
      v-flex( v-for="time in times", :key="time", xs6 )
        v-card.one__card.py-4( @click="onSelect(time)", :class="{ 'teal lighten-2 white--text': active === time.name }" )
          v-card-text.text-xs-center
            div.headline
              | {{ time.value | pluralize }}
</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'one',
    filters: {
      pluralize (value) {
        let result = null
        switch (value) {
          case 1:
            result = value + ' час'
            break
          case 1.5:
            result = value + ' часа'
            break
          case 2:
            result = value + ' часа'
            break
          case 3:
            result = value + ' часа'
            break
        }
        return result
      }
    },
    data () {
      return {
        title: 'Сколько будет длиться фотосессия?',
        active: '',
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
  
  .one

    &__card
      cursor pointer

</style>
