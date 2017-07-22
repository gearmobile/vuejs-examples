<template lang="pug">

  v-card.three
    v-card-text

      v-layout( row )
        v-flex( xs12, md6 )
          v-checkbox( label="Кирпич", v-model="brick", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Бетон", v-model="concrete", hide-details )
        v-flex( xs12, md6 )
          v-checkbox( label="Гипсокартон", v-model="drywall", hide-details )

      v-layout.mb-2( row, wrap)
        app-stepper-list

      v-layout( row, wrap )
        v-flex( xs12 )
          v-checkbox( label="Звонок", v-model="bell", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Щиток в подъезде", v-model="check1", hide-details )
        v-flex( xs12 )
          v-checkbox( label="Щиток в помещении", v-model="check2", hide-details )

      v-layout( row )
        v-flex( xs12 )
          v-btn( block, primary )
            v-icon( left, dark )
              | attach_money
            | расчитать стоимость

</template>

<script>
export default {
  name: 'three',
  data () {
    return {
      brick: false,
      concrete: false,
      drywall: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  //
</style>
