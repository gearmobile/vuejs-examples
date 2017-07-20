<template lang="pug">
  v-card
    v-card-text

      v-layout( row )
        v-flex( xs12, md6 )
          v-checkbox( label="Кирпич", v-model="brick" )
        v-flex( xs12, md6 )
          v-checkbox( label="Бетон", v-model="concrete" )
      
      v-layout.mb-2( row )
        v-flex( xs12, md4 )
          v-subheader
            | Квадратура помещения
        v-flex( xs12, md8, style="display: flex; align-items: center; border: 1px solid #000" )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | remove
          v-text-field.my-0( single-line, hide-details )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | add

      v-layout.mb-2( row )
        v-flex( xs12, md4 )
          v-subheader
            | Розетки (220 V)
        v-flex( xs12, md8, style="display: flex; align-items: center; border: 1px solid #000" )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | remove
          v-text-field.my-0( single-line, hide-details )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | add

      v-layout.mb-2( row )
        v-flex( xs12, md4 )
          v-subheader
            | Розетки ТВ
        v-flex( xs12, md8, style="display: flex; align-items: center; border: 1px solid #000" )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | remove
          v-text-field.my-0( single-line, hide-details )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | add

      v-layout.mb-2( row )
        v-flex( xs12, md4 )
          v-subheader
            | Розетки телефон, интернет
        v-flex( xs12, md8, style="display: flex; align-items: center; border: 1px solid #000" )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | remove
          v-text-field.my-0( single-line, hide-details )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | add

      v-layout.mb-2( row )
        v-flex( xs12, md4 )
          v-subheader
            | Выключатели
        v-flex( xs12, md8, style="display: flex; align-items: center; border: 1px solid #000" )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | remove
          v-text-field.my-0( single-line, hide-details )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | add

      v-layout.mb-2( row )
        v-flex( xs12, md4 )
          v-subheader
            | Люстра, светильник, бра
        v-flex( xs12, md8, style="display: flex; align-items: center; border: 1px solid #000" )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | remove
          v-text-field.my-0( single-line, hide-details )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | add

      v-layout.mb-2( row )
        v-flex( xs12, md4 )
          v-subheader
            | Точечный свет
        v-flex( xs12, md8, style="display: flex; align-items: center; border: 1px solid #000" )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | remove
          v-text-field.my-0( single-line, hide-details )
          v-btn.ma-0( small, fab, dark, primary )
            v-icon
              | add

      v-layout( row )
        v-flex( xs12, md4 )
          v-checkbox( label="Звонок", v-model="bell" )
        v-flex( xs12, md4 )
          v-checkbox( label="Щиток в подъезде", v-model="check1" )
        v-flex( xs12, md4 )
          v-checkbox( label="Щиток в помещении", v-model="check2" )

      v-layout( row )
        v-flex( xs12 )
          v-btn( block, primary )
            v-icon( left, dark )
              | attach_money
            | расчитать стоимость

</template>

<script>

export default {
  name: 'one',
  data () {
    return {
      brick: false,
      concrete: false,
      bell: false,
      check1: false,
      check2: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  //
</style>
