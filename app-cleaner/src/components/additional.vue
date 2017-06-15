<template lang="pug">

  .additional
  
    h3.page-header.text-center Дополнительно

    // ACTION SECTION
    app-action

    // ADDITIONAL SECTIONS

    // REPAIR
    section( v-if="clearing === 'repair'" )
      .row.additional__row
        .col-md-3
          .text-center.well
            h5 Окна
            .well__item
              button.btn.btn-default( type="button", @click="decreaseWindows()", :disabled="windowsStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="windows.value" )
              button.btn.btn-default( type="button", @click="increaseWindows()", :disabled="windowsStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Гардеробная
            .well__item
              button.btn.btn-default( type="button", @click="decreaseGarderob()", :disabled="garderobStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="garderob.value" )
              button.btn.btn-default( type="button", @click="increaseGarderob()", :disabled="garderobStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Доп. время
            .well__item
              button.btn.btn-default( type="button", @click="decreaseAddtime()", :disabled="addtimeStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="addtime.value" )
              button.btn.btn-default( type="button", @click="increaseAddtime()", :disabled="addtimeStateIncrease" ) +

    // GENERAL
    section( v-if="clearing === 'general'" )
      .row.additional__row
        .col-md-3
          .text-center.well
            h5 Глажка
            .well__item
              button.btn.btn-default( type="button", @click="decreaseGlajka()", :disabled="glajkaStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="glajka.value" )
              button.btn.btn-default( type="button", @click="increaseGlajka()", :disabled="glajkaStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Окна
            .well__item
              button.btn.btn-default( type="button", @click="decreaseWindows()", :disabled="windowsStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="windows.value" )
              button.btn.btn-default( type="button", @click="increaseWindows()", :disabled="windowsStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Гардеробная
            .well__item
              button.btn.btn-default( type="button", @click="decreaseGarderob()", :disabled="garderobStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="garderob.value" )
              button.btn.btn-default( type="button", @click="increaseGarderob()", :disabled="garderobStateIncrease" ) +

    // COMMON
    section( v-if="clearing === 'single' || clearing === 'express'" )
      .additional__row
        .col-md-3
          .text-center.well
            h5 Холодильник
            .well__item
              button.btn.btn-default( type="button", @click="decreaseFridge()", :disabled="fridgeStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="fridge.value" )
              button.btn.btn-default( type="button", @click="increaseFridge()", :disabled="fridgeStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Духовка
            .well__item
              button.btn.btn-default( type="button", @click="decreaseDuhovka()", :disabled="duhovkaStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="duhovka.value" )
              button.btn.btn-default( type="button", @click="increaseDuhovka()", :disabled="duhovkaStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Микроволновка
            .well__item
              button.btn.btn-default( type="button", @click="decreaseMicrowaver()", :disabled="microwaverStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="microwaver.value" )
              button.btn.btn-default( type="button", @click="increaseMicrowaver()", :disabled="microwaverStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Кухонные шкафы
            .well__item
              button.btn.btn-default( type="button", @click="decreaseShkaf()", :disabled="shkafStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="shkaf.value" )
              button.btn.btn-default( type="button", @click="increaseShkaf()", :disabled="shkafStateIncrease" ) +
      .additional__row
        .col-md-3
          .text-center.well
            h5 Посуда
            .well__item
              button.btn.btn-default( type="button", @click="decreaseDishes()", :disabled="dishesStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="dishes.value" )
              button.btn.btn-default( type="button", @click="increaseDishes()", :disabled="dishesStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Глажка
            .well__item
              button.btn.btn-default( type="button", @click="decreaseGlajka()", :disabled="glajkaStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="glajka.value" )
              button.btn.btn-default( type="button", @click="increaseGlajka()", :disabled="glajkaStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Окна
            .well__item
              button.btn.btn-default( type="button", @click="decreaseWindows()", :disabled="windowsStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="windows.value" )
              button.btn.btn-default( type="button", @click="increaseWindows()", :disabled="windowsStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Балкон
            .well__item
              button.btn.btn-default( type="button", @click="decreaseBalcon()", :disabled="balconStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="balcon.value" )
              button.btn.btn-default( type="button", @click="increaseBalcon()", :disabled="balconStateIncrease" ) +
      .additional__row
        .col-md-3
          .text-center.well
            h5 Гардеробная
            .well__item
              button.btn.btn-default( type="button", @click="decreaseGarderob()", :disabled="garderobStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="garderob.value" )
              button.btn.btn-default( type="button", @click="increaseGarderob()", :disabled="garderobStateIncrease" ) +
        .col-md-3
          .text-center.well
            h5 Доп. время
            .well__item
              button.btn.btn-default( type="button", @click="decreaseAddtime()", :disabled="addtimeStateDecrease" ) -
              input.form-control.text-center( type="text", v-model="addtime.value" )
              button.btn.btn-default( type="button", @click="increaseAddtime()", :disabled="addtimeStateIncrease" ) +

</template>

<script>
  import Action from './action.vue'

  export default {
    name: 'additional',
    components: {
      appAction: Action
    },
    data () {
      return {
        fridge: {
          value: 0,
          price: 300,
          min: 0,
          max: 5,
          step: 1,
          time: 30
        },
        duhovka: {
          value: 0,
          price: 400,
          min: 0,
          max: 5,
          step: 1,
          time: 30
        },
        microwaver: {
          value: 0,
          price: 200,
          min: 0,
          max: 5,
          step: 1,
          time: 30
        },
        shkaf: {
          value: 0,
          price: 600,
          min: 0,
          max: 10,
          step: 1,
          titme: 30
        },
        dishes: {
          value: 0,
          price: 200,
          min: 0,
          max: 180,
          step: 30,
          time: 30
        },
        glajka: {
          value: 0,
          price: 400,
          min: 0,
          max: 5,
          step: 1,
          titme: 30
        },
        windows: {
          value: 0,
          price: 200,
          min: 0,
          max: 30,
          step: 1,
          time: 15
        },
        balcon: {
          value: 0,
          price: 300,
          min: 0,
          max: 5,
          step: 1,
          time: 30
        },
        garderob: {
          value: 0,
          price: 400,
          min: 0,
          max: 5,
          step: 1,
          time: 30
        },
        addtime: {
          value: 0,
          price: 100,
          min: 0,
          max: 5,
          step: 1,
          time: 30
        }
      }
    },
    methods: {
      increaseFridge () {
        this.fridge.value += this.fridge.step
      },
      decreaseFridge () {
        if (this.fridge.value === this.fridge.min) {
          return
        }
        this.fridge.value -= this.fridge.step
      },
      increaseDuhovka () {
        this.duhovka.value += this.duhovka.step
      },
      decreaseDuhovka () {
        if (this.duhovka.value === this.duhovka.min) {
          return
        }
        this.duhovka.value -= this.duhovka.step
      },
      increaseMicrowaver () {
        this.microwaver.value += this.microwaver.step
      },
      decreaseMicrowaver () {
        if (this.microwaver.value === this.microwaver.min) {
          return
        }
        this.microwaver.value -= this.microwaver.step
      },
      increaseShkaf () {
        this.shkaf.value += this.shkaf.step
      },
      decreaseShkaf () {
        if (this.shkaf.value === this.shkaf.min) {
          return
        }
        this.shkaf.value -= this.shkaf.step
      },
      increaseDishes () {
        // 0 - 30 - 1 - 1.5 - 2 - 2.5 - 3
        this.dishes.value += this.dishes.step
      },
      decreaseDishes () {
        if (this.dishes.value === this.dishes.min) {
          return
        }
        this.dishes.value -= this.dishes.step
      },
      increaseGlajka () {
        this.glajka.value += this.glajka.step
      },
      decreaseGlajka () {
        if (this.glajka.value === this.glajka.min) {
          return
        }
        this.glajka.value -= this.glajka.step
      },
      increaseWindows () {
        this.windows.value += this.windows.step
      },
      decreaseWindows () {
        if (this.windows.value === this.windows.min) {
          return
        }
        this.windows.value -= this.windows.step
      },
      increaseBalcon () {
        this.balcon.value += this.balcon.step
      },
      decreaseBalcon () {
        if (this.balcon.value === this.balcon.min) {
          return
        }
        this.balcon.value -= this.balcon.step
      },
      increaseGarderob () {
        this.garderob.value += this.garderob.step
      },
      decreaseGarderob () {
        if (this.garderob.value === this.garderob.min) {
          return
        }
        this.garderob.value -= this.garderob.step
      },
      increaseAddtime () {
        this.addtime.value += this.addtime.step
      },
      decreaseAddtime () {
        if (this.addtime.value === this.addtime.min) {
          return
        }
        this.addtime.value -= this.addtime.step
      }
    },
    computed: {
      fridgeStateDecrease () {
        return this.fridge.value === this.fridge.min
      },
      fridgeStateIncrease () {
        return this.fridge.value === this.fridge.max
      },
      duhovkaStateDecrease () {
        return this.duhovka.value === this.duhovka.min
      },
      duhovkaStateIncrease () {
        return this.duhovka.value === this.duhovka.max
      },
      microwaverStateDecrease () {
        return this.microwaver.value === this.microwaver.min
      },
      microwaverStateIncrease () {
        return this.microwaver.value === this.microwaver.max
      },
      shkafStateDecrease () {
        return this.shkaf.value === this.shkaf.min
      },
      shkafStateIncrease () {
        return this.shkaf.value === this.shkaf.max
      },
      dishesStateDecrease () {
        return this.dishes.value === this.dishes.min
      },
      dishesStateIncrease () {
        return this.dishes.value === this.dishes.max
      },
      glajkaStateDecrease () {
        return this.glajka.value === this.glajka.min
      },
      glajkaStateIncrease () {
        return this.glajka.value === this.glajka.max
      },
      windowsStateDecrease () {
        return this.windows.value === this.windows.min
      },
      windowsStateIncrease () {
        return this.windows.value === this.windows.max
      },
      balconStateDecrease () {
        return this.balcon.value === this.balcon.min
      },
      balconStateIncrease () {
        return this.balcon.value === this.balcon.max
      },
      garderobStateDecrease () {
        return this.garderob.value === this.garderob.min
      },
      garderobStateIncrease () {
        return this.garderob.value === this.garderob.max
      },
      addtimeStateDecrease () {
        return this.addtime.value === this.addtime.min
      },
      addtimeStateIncrease () {
        return this.addtime.value === this.addtime.max
      }
    }
  }
</script>

<style lang="scss" scoped>

  .additional {

    &__row {
      display: flex;
      justify-content: center;
    }

    &__item {
      display: flex;
    }
  }

</style>
