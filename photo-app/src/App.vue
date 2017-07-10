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

      v-snackbar( vertical, v-model="snackbar" )
        | {{ warning }}
        v-btn.pink--text( flat, @click.native="snackbar = false" )
          | close


    v-footer( :fixed="fixed" )
      v-spacer
      span
        | {{ date }}

</template>

<script>
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
          time: 0,
          service: 0,
          cert: 0,
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
        if (this.active < 6) {
          this.active += 1
          this.current = 'step' + this.active
        } else if (this.order.time === 0) {
          this.warning = 'step one warning'
          this.snackbar = true
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
        return this.order.time + this.order.service + this.order.cert + this.order.shipping
      }
    },
    components: {
      step1: one,
      step2: two,
      step3: three,
      step4: four,
      step5: five,
      step6: six
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
