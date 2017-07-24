<template lang="pug">

  v-card.three
    v-card-text

      // HEADER
      v-layout( row )
        v-flex( xs12, md6 )
          v-radio( label="Кирпич", value="brick", v-model="material", hide-details )
        v-flex( xs12, md6 )
          v-radio( label="Бетон", value="concrete", v-model="material", hide-details )
        v-flex( xs12, md6 )
          v-radio( label="Гипсокартон", value="drywall", v-model="material", hide-details )

      // MAIN
      v-layout.mb-2( row, wrap)
        app-stepper-list

      // FOOTER
      v-layout( row, wrap )
        v-flex( xs12 )
          v-checkbox( label="Звонок", value="bell", v-model="additional", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Щиток в подъезде", value="flapEnt", v-model="additional", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Щиток в помещении", value="flapIndoors", v-model="additional", hide-details )

</template>

<script>
  import stepperList from '../shared/stepperList.vue'

  export default {
    name: 'three',
    data () {
      return {
        material: 'brick',
        additional: []
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
