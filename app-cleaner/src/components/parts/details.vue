<template lang="pug">
  
  // DETAILS
  .details.well

    // DETAILS TITLE    
    h5.details__title.page-header
      | перечень работ
    
    // DETAILS LIST
    ul.list
      li( v-for="(order, index) in orders", :key="index" ) <span class="acent acent--more">{{ orderOutput(order) }}</span>

    // DETAILS DESCRIPTION
    p К вам приедет <span class="acent acent--more">{{ workerOutput }}</span> со всеми необходимыми средствами и приборами.
    p Уборка займет <span class="acent acent--more">{{ timeOutput }}</span>. Приедем в удобное для вас время.
    p: a.acent(href="#") Что входит в уборку
      
</template>

<script>
  import { mapGetters } from 'vuex'
  import mixins from '../../mixins/mixin.js'

  export default {
    name: 'details',
    computed: {
      ...mapGetters({
        time: 'getTime',
        worker: 'getWorkers',
        orders: 'getOrders'
      }),
      timeOutput () {
        return this.time + ' ' + this.getNoun(this.time, 'час', 'часа', 'часов')
      },
      workerOutput () {
        return this.worker + ' ' + this.getNoun(this.time, 'специалист', 'специалиста', 'специалистов')
      }
    },
    methods: {
      orderOutput (order) {
        return order.quantity + ' ' + this.getNoun(order.quantity, order.singular, order.few, order.plural)
      }
    },
    mixins: [mixins]
  }
</script>

<style lang="scss" scoped>
  
  .details {
    text-align: center;
    width: 80%;
    margin-top: 20px;

    & .acent {
      color: #03aebc;

      &--more {
        font-weight: 700;
      }
    }

    &__title {
      text-transform: uppercase;
    }

    & .list {
      width: 50%;
      margin: 0 auto 2rem;
      text-align: left;
    }
  }
</style>
