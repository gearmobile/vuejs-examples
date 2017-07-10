<template lang="pug">

  v-app

    v-container

      v-layout.mb-2( row )
        v-flex( v-for="i in 6", :key="i" )
          v-card( :class="{ 'yellow white--text': active === i }" )
            v-card-text.text-xs-center
              | step {{ i }}

      v-layout( row, wrap )
        v-flex( xs12, sm8 )
          keep-alive
            component( :is="current" )
        v-flex( xs12, sm4 )
          v-card( height="200px" )
            v-card-text.text-xs-center
              h2.display-2
                | {{sum}}

      v-layout( row, justify-space-between )
        v-flex( xs2 )
          v-btn.primary( @click.native="prev()" )
            | prev
        v-flex.text-xs-right( xs2 )
          v-btn.primary( @click.native="next()" )
            | next

      v-snackbar( top, v-model="snackbar" )
        | {{ warning }}
        v-btn.pink--text( flat, @click.native="snackbar = false" )
          | close


    v-footer( :fixed="fixed" )
      v-spacer
      span
        | {{ date }}

</template>

<script>
  import eventBus from './main.js'
  import one from './components/one.vue'
  import two from './components/two.vue'
  import three from './components/three.vue'
  import four from './components/four.vue'
  import five from './components/five.vue'
  import six from './components/six.vue'

  export default {
    data () {
      return {
        snackbar: false,
        warning: '',
        fixed: true,
        current: 'step1',
        active: 1,
        order: {
          time: {
            duration: null,
            price: 0
          },
          service: {
            title: null,
            price: 0
          },
          cert: {
            title: null,
            price: 0
          },
          shipping: 0,
          greeting: null,
          customer: {
            name: null,
            phone: null,
            email: null
          }
        }
      }
    },
    methods: {
      next () {
        // if (this.order.time.price === 0 && this.current === 'step1') {
        //   this.warning = 'Выберите длительность фотосессии'
        //   this.snackbar = true
        //   return
        // }
        // if (this.order.service === 0) {
        //   this.warning = 'Выберите дополнительные услуги'
        //   this.snackbar = true
        //   return
        // }
        // if (this.order.cert === 0) {
        //   this.warning = 'Выберите сертификат'
        //   this.snackbar = true
        //   return
        // }
        // if (this.order.shipping === 0) {
        //   this.warning = 'Выберите тип доставки'
        //   this.snackbar = true
        //   return
        // }
        if (this.active < 6) {
          if (this.order.time.price === 0 && this.current === 'step1') {
            this.warning = 'Выберите длительность фотосессии'
            this.snackbar = true
            return
          } else {
            this.active += 1
            this.current = 'step' + this.active
          }
        }
      },
      prev () {
        if (this.active > 1) {
          this.active -= 1
          this.current = 'step' + this.active
        }
      }
    },
    computed: {
      date () {
        return new Date().getFullYear()
      },
      sum () {
        return this.order.time.price + this.order.service.price + this.order.cert.price + this.order.shipping
      }
    },
    components: {
      step1: one,
      step2: two,
      step3: three,
      step4: four,
      step5: five,
      step6: six
    },
    created () {
      eventBus.$on('time', data => {
        this.order.time.duration = data.value
        this.order.time.price = data.price
      })
      eventBus.$on('service', data => {
        this.order.service.title = data.title
        this.order.service.price = data.price
      })
      eventBus.$on('cert', data => {
        this.order.cert.title = data.title
        this.order.cert.price = data.price
      })
      eventBus.$on('greeting', data => {
        this.order.greeting = data
      })
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
