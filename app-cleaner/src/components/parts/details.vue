<template lang="pug">
  .details.well
    p
      | К вам приедет <span class="acent">{{ workerOutput }}</span> со всеми необходимыми средствами и приборами.
    p
      | 1 комната, 1 ванная. Уборка займет <span class="acent">{{ timeOutput }}</span>. Приедем в удобное для вас время.
    p
      | Что входит в уборку
</template>

<script>
  import { mapGetters } from 'vuex'
  import mixins from '../../mixins/mixin.js'

  export default {
    name: 'details',
    computed: {
      ...mapGetters({
        time: 'getTime',
        worker: 'getWorkers'
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
    }
  }
</style>
