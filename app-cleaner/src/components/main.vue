<template lang="pug">
  
  // MAIN
  .main
    
    // CALCULATE COST
    .row
      h3.page-header.text-center
        | Расчет стоимости
      
      .col-md-6.text-center
        .text-center.well.main__row
          button.btn.btn-default( @click="decreaseRoom", :disabled="roomStateDecrease" ) -
          input.form-control.text-center( type="text", v-model="getRoomValue" )
          button.btn.btn-default( @click="increaseRoom", :disabled="roomStateIncrease" ) +
      
      .col-md-6.text-center
        .text-center.well.main__row
          button.btn.btn-default( @click="decreaseBathroom" :disabled="bathroomStateDecrease" ) -
          input.form-control.text-center( type="text", v-model="getBathroomValue" )
          button.btn.btn-default( @click="increaseBathroom" :disabled="bathroomStateIncrease" ) +
    
    // SINGLE CLEARING
    .row
      h4.page-header.text-center
        | Разовая уборка
      .col-md-4
        .text-center.well.main__wrapper
          label.main__label( for="repair" )
            input( id="repair", name="type", type="radio", value="repair", v-model="clearing" )
            | после ремонта
      .col-md-4
        .text-center.well.main__wrapper
          label.main__label( for="general" )
            input( id="general", name="type", type="radio", value="general", v-model="clearing" )
            | генеральная
      .col-md-4
        .text-center.well.main__wrapper
          label.main__label( for="express" )
            input( id="express", name="type", type="radio", value="express", v-model="clearing" )
            | экспресс
    
    // SINGLE SECTION
    .row
      .col-md-12
        .text-center.well.main__wrapper
          label.main__label( for="single" )
            input( id="single", name="type", type="radio", value="single", v-model="clearing" )
            | разовая уборка

    // DISCOUNT SECTION
    .row( v-if="showDiscountBlock" )
      h4.page-header.text-center
        | Периодичная уборка
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountFirst", :class="{ 'main__active': getDiscountFirstState }" )
          h5.main__highlight
            | 1 раз в месяц
          p.main__discount
            | со скидкой #[strong {{ getdDiscountFirstValue | addPercent }}]
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountSecond", :class="{ 'main__active': getDiscountSecondState }" )
          h5.main__highlight
            | 1 раз в 2 недели
          p.main__discount
            | со скидкой #[strong {{ getDiscountSecondValue | addPercent }}]
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountThird", :class="{ 'main__active': getDiscountThirdState }" )
          h5.main__highlight
            | 1 раз в неделю
          p.main__discount
            | со скидкой #[strong {{ getDiscountThirdValue | addPercent }}]
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'main',
    data () {
      return {
        discount: {
          first: {
            value: 10,
            state: false
          },
          second: {
            value: 15,
            state: false
          },
          third: {
            value: 20,
            state: false
          }
        }
      }
    },
    computed: {
      ...mapGetters([
        'getRoomValue',
        'roomStateDecrease',
        'roomStateIncrease',
        'getBathroomValue',
        'bathroomStateDecrease',
        'bathroomStateIncrease',
        'getClearingValue',
        'getdDiscountFirstValue',
        'getDiscountSecondValue',
        'getDiscountThirdValue',
        'getDiscountFirstState',
        'getDiscountSecondState',
        'getDiscountThirdState',
        'showDiscountBlock'
      ]),
      clearing: {
        get () { return this.getClearingValue },
        set (value) { this.setClearingValue(value) }
      }
    },
    methods: {
      ...mapActions([
        'increaseRoom',
        'decreaseRoom',
        'increaseBathroom',
        'decreaseBathroom',
        'setClearingValue',
        'onDiscountFirst',
        'onDiscountSecond',
        'onDiscountThird'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  
  .main {

    &__row {
      display: flex;
    }

    &__wrapper {
      padding: 0;
      background-color: transparent;
    }

    &__label {
      width: 100%;
      cursor: pointer;
      padding: 20px 19px;
      background-color: #f5f5f5;

      &:hover {
        background-color: rgba( 3,174,188, .3 );
      }
    }

    &__thumb {
      cursor: pointer;
    }

    &__highlight {
      color: #03aebc;
      font-weight: 700;
      margin-bottom: 5px;
    }

    &__active {
      background-color: rgba( 3,174,188, .1 );
    }

    &__discount {
      font-size: 20px;
      margin-bottom: 0;
    }

  }

</style>
