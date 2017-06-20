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
      app-discount( v-for="(discount, index) in discounts", :key="index", :discount="discount" )

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
      .row.promocode.well( v-if="commonShow" )
        .promocode__row
          input.form-control( type="text", v-model.trim.number="promocode.value" )
          button.btn.btn-default( type="button", @click="onPromo()", :disabled="promocode.disabled" )
            | Применить
        p.promocode__error( v-if="promocode.error" )
          | Вы ввели неправильный промокод

    // DISCOUNT SECTION
    .row.well.discount( v-if="discountShow" )
      .col-md-6.col-md-offset-3.clearfix
        p.pull-left.discount__primo Общая сумма:
        p.pull-right.discount__primo--sum {{ getTotal | locate }}
      .col-md-6.col-md-offset-3.clearfix
        p.pull-left.discount__secondo Сумма скидки:
        p.pull-right.discount__secondo--sum {{ resultDiscount | locate }}
      .col-md-6.col-md-offset-3.clearfix
        p.pull-left.discount__tetro Итого сумма:
        p.pull-right.discount__tetro--sum {{ totalSum | locate }}

    // SECTION TOTAL
    .total( v-if="commonShow" )
      p.total__title
        | К оплате:
      p.total__sum
        | {{ getTotal | locate }}

    // ORDER SECTION
    .row.order
      .col-md-6.col-md-offset-3
        button.btn.btn-primary.btn-lg.order__button( type="button", @click="orderShow()" ) Заказать уборку

</template>

<script>
  import filters from '../filters/filters.js'
  import { mapGetters, mapActions } from 'vuex'
  import Input from './parts/input.vue'
  import Cards from './parts/card.vue'
  import Promo from './parts/promo.vue'
  import Discount from './parts/discount.vue'

  export default {
    name: 'main',
    data () {
      return {
        promocode: {
          status: false,
          value: 'У меня есть промокод',
          code: 123,
          percent: 10,
          disabled: false,
          error: false,
          show: true
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
        discounts: 'getDiscount',
        commonShow: 'showCommon',
        discountShow: 'showDiscount',
        totalResult: 'getResult'
      }),
      // CHECK PROMOCODE
      promoSum () {
        if (this.promocode.status) {
          const total = this.totalResult * this.promocode.percent / 100
          return total
        } else {
          return null
        }
      },
      // GET TOTAL SUM
      getTotal () {
        return this.totalResult - this.promoSum
      },
      // GET TOTAL SUM
      totalSum () {
        return this.getTotal - this.resultDiscount
      }
    },
    methods: {
      ...mapActions({
        orderShow: 'showOrder'
      }),
      onPromo () {
        if (this.promocode.value === this.promocode.code) {
          this.promocode.status = true
          this.promocode.disabled = true
          this.promocode.error = false
          this.promocode.value = 'Промокод успешно активирован'
        } else {
          this.promocode.error = true
        }
      }
    },
    components: {
      appInput: Input,
      appCards: Cards,
      appPromo: Promo,
      appDiscount: Discount
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

    // TOTAL SECTION

    & .total {
      display: flex;
      width: 80%;
      margin-left: 10%;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;

      &__title, &__sum {
        font-weight: 700;
        color: #03aebc;
      }

      &__title {
        font-size: 36px;
      }

      &__sum {
        font-size: 38px;
      }
    }

    // PROMOCODE SECTION

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

    // DISCOUNT SECTION

    & .discount {
      color: #03aebc;
      padding: 20px 0;

      &__primo {
        font-size: 22px;

        &--sum {
          font-weight: 700;
          font-size: 24px;
        }
      }

      &__secondo {
        font-size: 20px;

        &--sum {
          font-weight: 700;
          font-size: 22px;
        }
      }

      &__tetro {
        font-size: 26px;
        margin-bottom: 0;

        &--sum {
          font-weight: 700;
          font-size: 28px;
          margin-bottom: 0;
        }
      }
    }

    // ORDER SECTION

    & .order {
      padding-top: 20px;
      padding-bottom: 20px;

      &__button {
        width: 60%;
        margin-left: 20%;
      }
    }

  }

</style>
