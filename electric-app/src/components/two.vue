<template lang="pug">

  v-card.two
    v-card-text

      // HEADER
      v-layout( row )
        v-flex( xs12, md6 )
          v-checkbox( label="Кирпич", value="brick", v-model="material", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Бетон", value="concrete", v-model="material", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Дерево", value="wood", v-model="material", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Блоки", value="blocks", v-model="material", hide-details )

      // MAIN
      v-layout.mb-2( row, wrap)
        app-stepper-list

      v-layout( row, wrap )
        v-flex( xs12 )
          v-checkbox( label="Звонок", value="bell", v-model="additional", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Заземление", value="grounding", v-model="additional", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Щиток в помещении", value="flapIndoors", v-model="additional", hide-details )

</template>

<script>
  import stepperList from './stepperList.vue'

  export default {
    name: 'two',
    data () {
      return {
        material: 'brick',
        additional: ''
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
