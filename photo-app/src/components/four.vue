<template lang="pug">
  v-container
    v-layout( row, wrap )
      div.text-xs-center.teal.lighten-1.py-3.mb-1( style="width: 100%" )
        h2.display-1.mb-0.white--text
          | {{ title }}
        h3.title.mb-0.white--text
          | {{ subtitle }}
      v-flex( xs12 )
        v-text-field( name="greeting", label="Ваше поздравление здесь ...", v-model="greeting", multi-line )

</template>

<script>
  import eventBus from '../main.js'

  export default {
    name: 'four',
    data () {
      return {
        title: 'Индивидуальное поздравление',
        subtitle: '(мы обязательно напишем его на сертификате)',
        greeting: null
      }
    },
    watch: {
      greeting () {
        eventBus.$emit('greeting', this.greeting)
      }
    },
    created () {
      eventBus.$on('clear', () => {
        this.greeting = ''
      })
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
