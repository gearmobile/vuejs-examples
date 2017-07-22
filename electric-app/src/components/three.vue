<template lang="pug">

  v-card.three
    v-card-text

      // HEADER
      v-layout( row )
        v-flex( xs12, md6 )
          v-checkbox( label="Кирпич", v-model="brick", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Бетон", v-model="concrete", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Гипсокартон", v-model="drywall", hide-details )

      // MAIN
      v-layout.mb-2( row, wrap)
        app-stepper-list

      // FOOTER
      v-layout( row, wrap )
        v-flex( xs12 )
          v-checkbox( label="Звонок", v-model="bell", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Щиток в подъезде", v-model="check1", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Щиток в помещении", v-model="check2", hide-details )

</template>

<script>
  import stepperList from './stepperList.vue'

  export default {
    name: 'three',
    data () {
      return {
        brick: false,
        concrete: false,
        drywall: false,
        bell: false,
        check1: false,
        check2: false
      }
    },
    components: {
      appStepperList: stepperList
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
