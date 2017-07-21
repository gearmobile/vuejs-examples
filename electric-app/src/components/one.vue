<template lang="pug">
  
  v-card.one
    v-card-text

      v-layout( row )
        v-flex( xs12, md6 )
          v-checkbox( label="Кирпич", v-model="brick" )
        v-flex( xs12, md6 )
          v-checkbox( label="Бетон", v-model="concrete" )
      
      v-layout.mb-2( row, wrap)
        v-flex( xs12, md4 )
          v-subheader
            | Квадратура помещения
        v-flex( xs12, md8 )
          v-text-field.one__input(
            single-line,
            prepend-icon="remove",
            append-icon="add",
            :append-icon-cb="(() => increment('punto1'))",
            :prepend-icon-cb="(() => decrement('punto1'))",
            v-model="punto1",
            hide-details
          )

      v-layout.mb-2( row, wrap )
        v-flex( xs12, md4 )
          v-subheader
            | Розетки (220 V)
        v-flex( xs12, md8 )
          v-text-field.one__input(
            single-line,
            prepend-icon="remove",
            append-icon="add",
            :append-icon-cb="(() => increment('punto2'))",
            :prepend-icon-cb="(() => decrement('punto2'))",
            v-model="punto2",
            hide-details
          )

      v-layout.mb-2( row, wrap )
        v-flex( xs12, md4 )
          v-subheader
            | Розетки ТВ
        v-flex( xs12, md8 )
          v-text-field.one__input(
            single-line,
            prepend-icon="remove",
            append-icon="add",
            :append-icon-cb="(() => increment('punto3'))",
            :prepend-icon-cb="(() => decrement('punto3'))",
            v-model="punto3",
            hide-details
          )

      v-layout.mb-2( row, wrap )
        v-flex( xs12, md4 )
          v-subheader
            | Розетки телефон, интернет
        v-flex( xs12, md8 )
          v-text-field.one__input(
            single-line,
            prepend-icon="remove",
            append-icon="add",
            :append-icon-cb="(() => increment('punto4'))",
            :prepend-icon-cb="(() => decrement('punto4'))",
            v-model="punto4",
            hide-details
          )

      v-layout.mb-2( row, wrap )
        v-flex( xs12, md4 )
          v-subheader
            | Выключатели
        v-flex( xs12, md8 )
          v-text-field.one__input(
            single-line,
            prepend-icon="remove",
            append-icon="add",
            :append-icon-cb="(() => increment('punto5'))",
            :prepend-icon-cb="(() => decrement('punto5'))",
            v-model="punto5",
            hide-details
          )

      v-layout.mb-2( row, wrap )
        v-flex( xs12, md4 )
          v-subheader
            | Люстра, светильник, бра
        v-flex( xs12, md8 )
          v-text-field.one__input(
            single-line,
            prepend-icon="remove",
            append-icon="add",
            :append-icon-cb="(() => increment('punto6'))",
            :prepend-icon-cb="(() => decrement('punto6'))",
            v-model="punto6",
            hide-details
          )

      v-layout.mb-2( row, wrap )
        v-flex( xs12, md4 )
          v-subheader
            | Точечный свет
        v-flex( xs12, md8 )
          v-text-field.one__input(
            single-line,
            prepend-icon="remove",
            append-icon="add",
            :append-icon-cb="(() => increment('punto7'))",
            :prepend-icon-cb="(() => decrement('punto7'))",
            v-model="punto7",
            hide-details
          )

      v-layout( row, wrap )
        v-flex( xs12 )
          v-checkbox( label="Звонок", v-model="bell" )
        v-flex( xs12 )
          v-checkbox( label="Щиток в подъезде", v-model="check1" )
        v-flex( xs12 )
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
      check2: false,
      punto1: null,
      punto2: null,
      punto3: null,
      punto4: null,
      punto5: null,
      punto6: null,
      punto7: null
    }
  },
  methods: {
    increment (value) {
      if (this[value] < 10) {
        this[value] = (this[value] || 0) + 1
      } else {
        this.primoStatus = true
      }
    },
    decrement (value) {
      if (this[value] > 0) {
        this[value] = (this[value] || 0) - 1
      } else {
        this.secondoStatus = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

  .one

    &__input
      margin-top 0
      margin-bottom 0

      & .icon
        cursor pointer !important

      & .input-group__prepend-icon
        justify-content center !important

    // & .icon
      // cursor pointer !important
      // background-color #008080 !important
      // background-color #008080 !important
      // color #fff !important

    // & .input-group__prepend-icon
      //
      // justify-content center !important

    // & .input-group__details
      // display none

  // .one

  // .icon
  //     cursor pointer !important
  //     background-color #008080 !important
  //     color #fff !important
      
  //     &:hover
  //         background-color #26a69a !important
  //         transition background-color 0.2s

  // .input-group__prepend-icon
  //     justify-content center !important

  // .input-group__details
  //     display none

  // .input-group__input
  //     padding 0.2rem !important
  //     border 0.1rem solid #008080
      
  //     & input
  //         padding 0 0.6rem
  //         text-align center
  //         color #009688 !important

</style>
