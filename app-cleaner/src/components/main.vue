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
          input.form-control( type="text", v-model.trim.number="promocode.value" )
          button.btn.btn-default( type="button", @click="onPromo()", :disabled="promocode.disabled" )
            | Применить
        p.promocode__error( v-if="promocode.error" )
          | Вы ввели неправильный промокод

    // DISCOUNT SECTION
    .row.well.discount( v-if="showDiscount" )
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
    .total( v-if="showCommon" )
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
        totalResult: 'getResult'
      }),
      showCommon () {
        const check = this.discount.first.state || this.discount.second.state || this.discount.third.state
        return !check
      },
      showDiscount () {
        const check = this.discount.first.state || this.discount.second.state || this.discount.third.state
        return check
      },
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
      // GET DISCOUNT SUM
      resultDiscount () {
        let result = null
        if (this.discount.first.state) {
          result = (this.getTotal * this.discount.first.value) / 100
        }
        if (this.discount.second.state) {
          result = (this.getTotal * this.discount.second.value) / 100
        }
        if (this.discount.third.state) {
          result = (this.getTotal * this.discount.third.value) / 100
        }
        return result
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
      },
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
