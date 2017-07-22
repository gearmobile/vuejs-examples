<template lang="pug">

  v-card.four
    v-card-text

      // HEADER
      v-layout( row )
        v-flex( xs12, md6 )
          v-checkbox( label="Кирпич", v-model="brick", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Бетон", v-model="concrete", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Дерево", v-model="wood", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Блоки", v-model="blocks", hide-details )

      // MAIN
      v-layout.mb-2( row, wrap)
        app-stepper-list

      v-layout( row, wrap )
        v-flex( xs12 )
          v-checkbox( label="Звонок", v-model="bell", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Заземление", v-model="check1", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Щиток в помещении", v-model="check2", hide-details )

      // FOOTER
      v-layout( row )
        v-flex( xs12 )
          v-btn( block, primary )
            v-icon( left, dark )
              | attach_money
            | расчитать стоимость

</template>

<script>
  import stepperList from './stepperList.vue'

  export default {
    name: 'four',
    data () {
      return {
        brick: false,
        concrete: false,
        wood: false,
        blocks: false,
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
