const app = new Vue({
  data: {
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
    window: {
      value: 0,
      price: 200,
      min: 0,
      max: 25,
      step: 5
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
    additional: {
      fridger: {
        value: 0,
        price: 300,
        min: 0,
        max: 5,
        step: 1
      },
      duhovka: {
        value: 0,
        price: 400,
        min: 0,
        max: 5,
        step: 1
      },
      microwaver: {
        value: 0,
        price: 200,
        min: 0,
        max: 5,
        step: 1
      },
      shkaf: {
        value: 0,
        price: 600,
        min: 0,
        max: 10,
        step: 1
      },
      dishes: {
        value: 0,
        price: 200,
        min: 0,
        max: 180,
        step: 30
      },
      glajka: {
        value: 0,
        price: 400,
        min: 0,
        max: 5,
        step: 1
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
        step: 1
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
    },
    promo: {
      state: false,
      code: 123,
      discount: 10,
      disabled: false,
      error: false,
      show: true
    },
    checked: 'single'
  },
  // --------------------
  // COMPUTED
  // --------------------
  computed: {
    showCommon () {
      const check = this.discount.first.state || this.discount.second.state || this.discount.third.state
      return !check
    },
    showExpress () {
      return this.checked !== 'express'
    },
    // ROOM
    roomStateDecrease () {
      return this.room.value === this.room.min ? true : false
    },
    roomStateIncrease () {
      return this.room.value === this.room.max ? true : false
    },
    // BATHROOM
    bathroomStateDecrease () {
      return this.bathroom.value === this.bathroom.min ? true : false
    },
    bathroomStateIncrease () {
      return this.bathroom.value === this.bathroom.max ? true : false
    },
    // WINDOW
    windowStateDecrease () {
      return this.window.value === this.window.min ? true : false
    },
    windowStateIncrease () {
      return this.window.value === this.window.max ? true : false
    },
    // FRIDGER
    fridgerStateDecrease () {
      return this.additional.fridger.value === this.additional.fridger.min ? true : false
    },
    fridgerStateIncrease () {
      return this.additional.fridger.value === this.additional.fridger.max ? true : false
    },
    // DUHOVKA
    duhovkaStateDecrease () {
      return this.additional.duhovka.value === this.additional.duhovka.min ? true : false
    },
    duhovkaStateIncrease () {
      return this.additional.duhovka.value === this.additional.duhovka.max ? true : false
    },
    // MICROWAVE
    microwaverStateDecrease () {
      return this.additional.microwaver.value === this.additional.microwaver.min ? true : false
    },
    microwaverStateIncrease () {
      return this.additional.microwaver.value === this.additional.microwaver.max ? true : false
    },
    // SHKAF
    shkafStateDecrease () {
      return this.additional.shkaf.value === this.additional.shkaf.min ? true : false
    },
    shkafStateIncrease () {
      return this.additional.shkaf.value === this.additional.shkaf.max ? true : false
    },
    // DISHES
    dishesStateDecrease () {
      return this.additional.dishes.value === this.additional.dishes.min ? true : false
    },
    dishesStateIncrease () {
      return this.additional.dishes.value === this.additional.dishes.max ? true : false
    },
    // GLAJKA
    glajkaStateDecrease () {
      return this.additional.glajka.value === this.additional.glajka.min ? true : false
    },
    glajkaStateIncrease () {
      return this.additional.glajka.value === this.additional.glajka.max ? true : false
    },
    // WINDOWS
    windowsStateDecrease () {
      return this.additional.windows.value === this.additional.windows.min ? true : false
    },
    windowsStateIncrease () {
      return this.additional.windows.value === this.additional.windows.max ? true : false
    },
    // BALCON
    balconStateDecrease () {
      return this.additional.balcon.value === this.additional.balcon.min ? true : false
    },
    balconStateIncrease () {
      return this.additional.balcon.value === this.additional.balcon.max ? true : false
    },
    // GARDEROB
    garderobStateDecrease () {
      return this.additional.garderob.value === this.additional.garderob.min ? true : false
    },
    garderobStateIncrease () {
      return this.additional.garderob.value === this.additional.garderob.max ? true : false
    },
    // ADDTIME
    addtimeStateDecrease () {
      return this.additional.addtime.value === this.additional.addtime.min ? true : false
    },
    addtimeStateIncrease () {
      return this.additional.addtime.value === this.additional.addtime.max ? true : false
    },
    // RESULT
    result () {
      let total = [
        this.room,
        this.bathroom,
        this.window,
        this.additional.fridger,
        this.additional.duhovka,
        this.additional.microwaver,
        this.additional.shkaf,
        this.additional.dishes,
        this.additional.glajka,
        this.additional.windows,
        this.additional.balcon,
        this.additional.garderob,
        this.additional.addtime
      ].reduce((sum, c) => sum + c.value * c.price, 0)
      if (this.promo.state) {
        total = total - (total * this.promo.discount) / 100
      }
      return total
    }
  },
  // ---------------------
  // FILTERS
  // ---------------------
  filters: {
    hours (value) {
      // 0 - 30 - 1 - 1.5 - 2 - 2.5 - 3
      let result = null
      switch (value) {
        case 0:
          result = 0
          break
        case 30:
          result = 30
          break
        case 60:
          result = 1
          break
        case 90:
          result = 1.5
          break
        case 120:
          result = 2
          break
        case 150:
          result = 2.5
          break
        case 180:
          result = 3
          break
        default:
          result = 0
      }
      return result
    },
    locate (value) {
      return value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumSignificantDigits: 4 })
    },
    addPercent (value) {
      return value + '%'
    }
  },
  // ---------------------
  // METHODS
  // ---------------------
  methods: {
    onDiscountFirst () {
      this.discount.second.state = false
      this.discount.third.state = false
      this.discount.first.state = this.discount.first.state ? false : true
    },
    onDiscountSecond () {
      this.discount.first.state = false
      this.discount.third.state = false
      this.discount.second.state = this.discount.second.state ? false : true
    },
    onDiscountThird () {
      this.discount.first.state = false
      this.discount.second.state = false
      this.discount.third.state = this.discount.third.state ? false : true
    },
    promoShow () {
      this.promo.show = this.promo.show ? false : true
      this.single.state = this.single.state ? false : true
    },
    // PROMO CODE
    onPromo () {
      const value = parseInt(document.getElementById('promocode').value)
      if (value === this.promo.code) {
        this.promo.state = true
        document.getElementById('promocode').value = null
        this.promo.disabled = true
        this.promo.error = false
      } else {
        this.promo.error = true
      }
    },
    // ROOM
    increaseRoom () {
      this.room.value += this.room.step
    },
    decreaseRoom () {
      if (this.room.value === this.room.min) {
        return
      }
      this.room.value -= this.room.step
    },
    // BATHROOM
    increaseBathroom () {
      this.bathroom.value += this.bathroom.step
    },
    decreaseBathroom () {
      if (this.bathroom.value === this.bathroom.min) {
        return
      }
      this.bathroom.value -= this.bathroom.step
    },
    // WINDOW
    increaseWindow () {
      this.window.value += this.window.step
    },
    decreaseWindow () {
      if (this.window.value === this.window.min) {
        return
      }
      this.window.value -= this.window.step
    },
    // FRIDGER
    increaseFridger () {
      this.additional.fridger.value += this.additional.fridger.step
    },
    decreaseFridger () {
      if (this.additional.fridger.value === this.additional.fridger.min) {
        return
      }
      this.additional.fridger.value -= this.additional.fridger.step
    },
    // DUHOVKA
    increaseDuhovka () {
      this.additional.duhovka.value += this.additional.duhovka.step
    },
    decreaseDuhovka () {
      if (this.additional.duhovka.value === this.additional.duhovka.min) {
        return
      }
      this.additional.duhovka.value -= this.additional.duhovka.step
    },
    // MICROWAVER
    increaseMicrowaver () {
      this.additional.microwaver.value += this.additional.microwaver.step
    },
    decreaseMicrowaver () {
      if (this.additional.microwaver.value === this.additional.microwaver.min) {
        return
      }
      this.additional.microwaver.value -= this.additional.microwaver.step
    },
    // SHKAF
    increaseShkaf () {
      this.additional.shkaf.value += this.additional.shkaf.step
    },
    decreaseShkaf () {
      if (this.additional.shkaf.value === this.additional.shkaf.min) {
        return
      }
      this.additional.shkaf.value -= this.additional.shkaf.step
    },
    // DISHES
    increaseDishes () {
      // 0 - 30 - 1 - 1.5 - 2 - 2.5 - 3
      this.additional.dishes.value += this.additional.dishes.step
    },
    decreaseDishes () {
      if (this.additional.dishes.value === this.additional.dishes.min) {
        return
      }
      this.additional.dishes.value -= this.additional.dishes.step
    },
    // GLAJKA
    increaseGlajka () {
      this.additional.glajka.value += this.additional.glajka.step
    },
    decreaseGlajka () {
      if (this.additional.glajka.value === this.additional.glajka.min) {
        return
      }
      this.additional.glajka.value -= this.additional.glajka.step
    },
    // WINDOWS
    increaseWindows () {
      this.additional.windows.value += this.additional.windows.step
    },
    decreaseWindows () {
      if (this.additional.windows.value === this.additional.windows.min) {
        return
      }
      this.additional.windows.value -= this.additional.windows.step
    },
    // BALCON
    increaseBalcon () {
      this.additional.balcon.value += this.additional.balcon.step
    },
    decreaseBalcon () {
      if (this.additional.balcon.value === this.additional.balcon.min) {
        return
      }
      this.additional.balcon.value -= this.additional.balcon.step
    },
    // GARDEROB
    increaseGarderob () {
      this.additional.garderob.value += this.additional.garderob.step
    },
    decreaseGarderob () {
      if (this.additional.garderob.value === this.additional.garderob.min) {
        return
      }
      this.additional.garderob.value -= this.additional.garderob.step
    },
    // ADDTIME
    increaseAddtime () {
      this.additional.addtime.value += this.additional.addtime.step
    },
    decreaseAddtime () {
      if (this.additional.addtime.value === this.additional.addtime.min) {
        return
      }
      this.additional.addtime.value -= this.additional.addtime.step
    }
  }
});

app.$mount('#app');