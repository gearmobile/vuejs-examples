<template lang="pug">

  v-app

    v-container

      v-layout.mb-2( row )
        v-flex( v-for="i in 6", :key="i", style="padding-right: 0; padding-left: 0;" )
          v-card( flat, :class="{ 'orange': active === i }" )
            v-card-text.text-xs-center
              | step {{ i }}

      v-layout( row, wrap )
        v-flex( xs12, sm8 )
          keep-alive
            component( :is="current" )
        v-flex( xs12, sm4 )
          v-card( height="200px", style="display: flex; align-items: center;" )
            v-card-text.text-xs-center
              h2.display-2
                | {{ sum | currency }}

      v-layout( row, justify-space-between )
        v-flex( xs2 )
          v-btn.primary( @click.native="onPrev()" )
            | prev
        v-flex.text-xs-right( xs2, v-if="nextShow" )
          v-btn.primary( @click.native="onNext()" )
            | next
        v-flex.text-xs-right( xs2, v-if="orderShow" )
          v-btn.primary( @click.native.stop="onOrder()" )
            | make order

      v-snackbar( top, v-model="snackbar" )
        | {{ warning }}
        v-btn.pink--text( flat, @click.native="snackbar = false" )
          | close

      v-dialog( v-model="dialog", persistent )
        v-card
          v-card-title.headline
            | Спасибо за ваш заказ!
          v-card-text.text-xs-center
            | Ваш заказ успешно отправлен.
            | Ожидайте звонок менеджера с подтверждением.
          v-card-actions
            v-spacer
            v-btn.green--text.darken-1( flat, @click.native="dialog = false" )
              | выход

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
    filters: {
      currency (value) {
        if (value === null) {
          return
        }
        return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
      }
    },
    data () {
      return {
        dialog: false,
        nextShow: true,
        orderShow: false,
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
          shipping: {
            title: null,
            price: 0
          },
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
      onNext () {
        if (this.order.time.price === 0 && this.current === 'step1') {
          this.warning = 'Выберите длительность фотосессии'
          this.snackbar = true
          return
        }
        if (this.order.service.price === 0 && this.current === 'step2') {
          this.warning = 'Выберите дополнительные услуги'
          this.snackbar = true
          return
        }
        if (this.order.cert.price === 0 && this.current === 'step3') {
          this.warning = 'Выберите сертификат'
          this.snackbar = true
          return
        }
        if (this.order.shipping.price === 0 && this.current === 'step5') {
          this.warning = 'Выберите тип доставки'
          this.snackbar = true
          return
        }
        if (this.active < 6) {
          this.active += 1
          this.current = 'step' + this.active
        }
        if (this.active === 6) {
          this.nextShow = false
          this.orderShow = true
        }
      },
      onPrev () {
        if (this.active === 6) {
          this.nextShow = true
          this.orderShow = false
        }
        if (this.active > 1) {
          this.active -= 1
          this.current = 'step' + this.active
        }
      },
      onOrder () {
        if ((this.order.customer.name === null || this.order.customer.phone === null) && this.current === 'step6') {
          this.warning = 'Необходимо указать ваши Ф.И.О.'
          this.snackbar = true
          return
        }
        this.dialog = true
      }
    },
    computed: {
      date () {
        return new Date().getFullYear()
      },
      sum () {
        return this.order.time.price + this.order.service.price + this.order.cert.price + this.order.shipping.price
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
      eventBus.$on('shipping', data => {
        this.order.shipping.title = data.title
        this.order.shipping.price = data.price
      })
      eventBus.$on('name', data => {
        this.order.customer.name = data
      })
      eventBus.$on('phone', data => {
        this.order.customer.phone = data
      })
      eventBus.$on('email', data => {
        this.order.customer.email = data
      })
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
