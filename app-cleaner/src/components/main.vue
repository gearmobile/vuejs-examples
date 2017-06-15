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
</template>

<script>
export default {
  name: 'primo',
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
      }
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
      padding: 20px 19px;
      cursor: pointer;
      background-color: #f5f5f5;
      width: 100%;

      &:hover {
        background-color: rgba( 3,174,188, .3 );
      }
    }
  }
</style>
