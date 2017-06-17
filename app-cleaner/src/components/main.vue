<template lang="pug">
  
  // MAIN
  .main
    
    // INPUT BLOCK
    .row
      h3.page-header.text-center
        | Расчет стоимости
      app-input( v-for="(item, index) in items", :key="index", :point="item" )

    // CLEARING BLOCK
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

    // DISCOUNT BLOCK
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

    h3.page-header.text-center Дополнительно
    
    // PROMOTION SECTION
    .main__line( v-if="clearing !== 'repair'" )
      app-promo( v-for="(promo, index) in promos", :key="index", :promo="promo" )

    // REPAIR BLOCK
    .main__line( v-if="clearing === 'repair'" )
      app-cards( v-for="(card, index) in repairs", :key="index", :card="card" )


    // GENERAL BLOCK
    .main__line( v-if="clearing === 'general'" )
      app-cards( v-for="(card, index) in generals", :key="index", :card="card" )


    // COMMON BLOCK
    .main__line( v-if="clearing === 'single' || clearing === 'express'" )
      app-cards( v-for="(card, index) in cards", :key="index", :card="card" )

    // SECTION PROMOCODE
    template( v-if="clearing !== 'express'" )
      .row.promocode.well( v-if="showCommon" )
        .promocode__row
          input.form-control( type="text", placeholder="у меня есть промокод" )
          button.btn.btn-default( type="button" )
            | Применить
        p.promocode__error
          | Вы ввели неправильный промокод

    // SECTION TOTAL
    .row.total( v-if="showCommon" )
      .col-md-6.col-md-offset-3.clearfix.total__inner
        p.pull-left
          | К оплате:
        p.pull-right
          | {{ totalResult | locate }}

</template>

<script>
  import filters from '../filters/filters.js'
  import { mapGetters } from 'vuex'
  import Input from './parts/input.vue'
  import Cards from './parts/card.vue'
  import Promo from './parts/promo.vue'

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
    filters,
    computed: {
      ...mapGetters({
        items: 'getData',
        cards: 'getCards',
        generals: 'getGenerals',
        repairs: 'getRepairs',
        promos: 'getPromos',
        totalResult: 'getResult'
      }),
      showCommon () {
        const check = this.discount.first.state || this.discount.second.state || this.discount.third.state
        return !check
      }
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
      appInput: Input,
      appCards: Cards,
      appPromo: Promo
    }
  }
</script>

<style lang="scss" scoped>
  
  .main {

    &__row {
      display: flex;
    }

    &__line {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
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

    & .total {
      margin-bottom: 40px;
      margin-top: 40px;

      &__inner {
        font-weight: 700;
        font-size: 36px;
        color: #03aebc;
      }
    }

    & .promocode {
      width: 80%;
      margin-left: 10%;
      margin-top: 40px;

      &__row {
        display: flex;
      }

      &__error {
        color: red;
        margin-top: 10px;
        margin-bottom: 0;
        font-style: italic;
      }
    }

  }

</style>
