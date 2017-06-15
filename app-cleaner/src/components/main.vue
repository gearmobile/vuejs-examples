<template lang="pug">
  
  .main
    
    
    h3.page-header.text-center Расчет стоимости
    .row
      .col-md-6.text-center
        .text-center.well.main__row
          button.btn.btn-default( @click="decreaseRoom()", :disabled="roomStateDecrease" ) -
          input.form-control.text-center( type="text", v-model="room.value" )
          button.btn.btn-default( @click="increaseRoom()", :disabled="roomStateIncrease" ) +
      .col-md-6.text-center
        .text-center.well.main__row
          button.btn.btn-default( @click="decreaseBathroom()" :disabled="bathroomStateDecrease" ) -
          input.form-control.text-center( type="text", v-model="bathroom.value" )
          button.btn.btn-default( @click="increaseBathroom()" :disabled="bathroomStateIncrease" ) +
    
    h4.page-header.text-center.text-capitalize разовая уборка
    .row
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

    .row
      h4.page-header.text-center.text-capitalize периодичная уборка
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountFirst()", :class="{ 'wrapper__active': discount.first.state }" )
          h5.main__highlight
          | 1 раз в месяц
          p.main__discount
          | со скидкой #[strong {{ discount.first.value | addPercent }}]
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountSecond()", :class="{ 'wrapper__active': discount.second.state }" )
          h5.main__highlight
          | 1 раз в 2 недели
          p.main__discount
          | со скидкой #[strong {{ discount.second.value | addPercent }}]
      .col-md-4
        .text-center.well.main__thumb( @click="onDiscountThird()", :class="{ 'wrapper__active': discount.third.state }" )
          h5.main__highlight
          | 1 раз в неделю
          p.main__discount
          | со скидкой #[strong {{ discount.third.value | addPercent }}]
</template>

<script>
  export default {
    name: 'main',
    data () {
      return {
        room: {
          value: 1,
          price: 1000,
          min: 1,
          max: 12,
          step: 1,
          time: 30
        },
        bathroom: {
          value: 1,
          price: 1200,
          min: 1,
          max: 5,
          step: 1,
          time: 30
        },
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
      roomStateDecrease () {
        return this.room.value === this.room.min
      },
      roomStateIncrease () {
        return this.room.value === this.room.max
      },
      bathroomStateDecrease () {
        return this.bathroom.value === this.bathroom.min
      },
      bathroomStateIncrease () {
        return this.bathroom.value === this.bathroom.max
      }
    },
    methods: {
      increaseRoom () {
        this.room.value += this.room.step
      },
      decreaseRoom () {
        if (this.room.value === this.room.min) {
          return
        }
        this.room.value -= this.room.step
      },
      increaseBathroom () {
        this.bathroom.value += this.bathroom.step
      },
      decreaseBathroom () {
        if (this.bathroom.value === this.bathroom.min) {
          return
        }
        this.bathroom.value -= this.bathroom.step
      },
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
