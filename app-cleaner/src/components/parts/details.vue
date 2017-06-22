<template lang="pug">
  .details.well
    p
      | К вам приедет <span class="acent acent--more">{{ workerOutput }}</span> со всеми необходимыми средствами и приборами.
    ul.details__list
      li( v-for="(order, index) in orders", :key="index" ) <span class="acent acent--more">{{ order.quantity }}</span> <span class="acent acent--more">{{ order.title }}</span>
    p
      | Уборка займет <span class="acent acent--more">{{ timeOutput }}</span>. Приедем в удобное для вас время.
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
        orders: 'getOrder'
      }),
      timeOutput () {
        return this.time + ' ' + this.getNoun(this.time, 'час', 'часа', 'часов')
      },
      workerOutput () {
        return this.worker + ' ' + this.getNoun(this.time, 'специалист', 'специалиста', 'специалистов')
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

    &__list {
      list-style-type: none;
      padding-left: 0;
      margin-left: 0;
      // text-align: left;
    }
  }
</style>
