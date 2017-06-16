<template lang="pug">
  
  // MAIN
  .main
    
    // CALCULATE COST
    .row
      h3.page-header.text-center
        | Расчет стоимости
      input-field( v-for="(item, index) in items", :key="index", :point="item" )

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
    .row
      .col-md-12
        .text-center.well.main__wrapper
          label.main__label( for="single" )
            input( id="single", name="type", type="radio", value="single", v-model="clearing" )
            | разовая уборка

    // DISCOUNT SECTION
    .row( v-if="clearing === 'single' || clearing === 'general'" )
      h4.page-header.text-center
        | Периодичная уборка
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountFirst", :class="{ 'main__active': discount.first.state }" )
          h5.main__highlight
            | 1 раз в месяц
          p.main__discount
            | со скидкой #[strong {{ discount.first.value | addPercent }}]
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountSecond", :class="{ 'main__active': discount.second.state }" )
          h5.main__highlight
            | 1 раз в 2 недели
          p.main__discount
            | со скидкой #[strong {{ discount.second.value | addPercent }}]
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountThird", :class="{ 'main__active': discount.third.state }" )
          h5.main__highlight
            | 1 раз в неделю
          p.main__discount
            | со скидкой #[strong {{ discount.third.value | addPercent }}]
</template>

<script>
  import { mapGetters } from 'vuex'
  import inputField from './parts/input.vue'

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
        },
        clearing: 'single'
      }
    },
    computed: {
      ...mapGetters({
        items: 'getData'
      })
    },
    methods: {
      onDiscountFirst () {
        this.discount.second.state = false
        this.discount.third.state = false
        this.discount.first.state = !this.discount.first.state
      },
      onDiscountSecond () {
        this.discount.first.state = false
        this.discount.third.state = false
        this.discount.second.state = !this.discount.second.state
      },
      onDiscountThird () {
        this.discount.first.state = false
        this.discount.second.state = false
        this.discount.third.state = !this.discount.third.state
      }
    },
    components: {
      inputField
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
