const app = new Vue({
  data: {
    room: {
      value: 1,
      price: 1000,
      min: 1,
      max: 12,
      step: 1
    },
    bathroom: {
      value: 1,
      price: 1200,
      min: 1,
      max: 5,
      step: 1
    },
    window: {
      value: 0,
      price: 1000,
      min: 0,
      max: 25,
      step: 5
    },
    clearing: {
      //
    },
    discount: {
      first: 10,
      second: 15,
      third: 20
    },
    additional: {
      fridger: {
        value: 0,
        price: 300,
        min: 0,
        max: 5
      },
      duhovka: {
        value: 0,
        price: 400,
        min: 0,
        max: 5
      },
      microwaver: {
        value: 0,
        price: 200
      },
      shkaf: {
        value: 0,
        price: 600,
        min: 0,
        max: 10
      },
      dishes: {
        value: 0,
        price: 200
      },
      glajka: {
        value: 0,
        price: 400
      },
      windows: {
        value: 0,
        price: 200,
        min: 0,
        max: 30
      },
      balcon: {
        value: 0,
        price: 300,
        min: 0,
        max: 5
      },
      garderob: {
        value: 0,
        price: 400,
        min: 0,
        max: 5
      },
      addtime: {
        value: 0,
        price: 100,
        min: 0,
        max: 5
      }
    }
  },
  computed: {
    // room
    roomStateDecrease () {
      return this.room.value === this.room.min ? true : false
    },
    roomStateIncrease () {
      return this.room.value === this.room.max ? true : false
    },
    // bathroom
    bathroomStateDecrease () {
      return this.bathroom.value === this.bathroom.min ? true : false
    },
    bathroomStateIncrease () {
      return this.bathroom.value === this.bathroom.max ? true : false
    },
    // window
    windowStateDecrease () {
      return this.window.value === this.window.min ? true : false
    },
    windowStateIncrease () {
      return this.window.value === this.window.max ? true : false
    },
    // fridger
    fridgerStateDecrease () {
      return this.additional.fridger.value === this.additional.fridger.min ? true : false
    },
    fridgerStateIncrease () {
      return this.additional.fridger.value === this.additional.fridger.max ? true : false
    },
    // duhovka
    duhovkaStateDecrease () {
      return this.additional.duhovka.value === this.additional.duhovka.min ? true : false
    },
    duhovkaStateIncrease () {
      return this.additional.duhovka.value === this.additional.duhovka.max ? true : false
    },
    // microwave
    microwaverStateDecrease () {
      return this.additional.microwaver.value === 0 ? true : false
    },
    microwaverStateIncrease () {
      return this.additional.microwaver.value === 5 ? true : false
    },
    // shkaf
    shkafStateDecrease () {
      return this.additional.shkaf.value === this.additional.shkaf.min ? true : false
    },
    shkafStateIncrease () {
      return this.additional.shkaf.value === this.additional.shkaf.max ? true : false
    },
    // dishes
    dishesState () {
      return this.additional.dishes.value === 0 ? true : false
    },
    glajkaState () {
      return this.additional.glajka.value === 0 ? true : false
    },
    // windows
    windowsStateDecrease () {
      return this.additional.windows.value === this.additional.windows.min ? true : false
    },
    windowsStateIncrease () {
      return this.additional.windows.value === this.additional.windows.max ? true : false
    },
    // balcon
    balconStateDecrease () {
      return this.additional.balcon.value === this.additional.balcon.min ? true : false
    },
    balconStateIncrease () {
      return this.additional.balcon.value === this.additional.balcon.max ? true : false
    },
    // garderob
    garderobStateDecrease () {
      return this.additional.garderob.value === this.additional.garderob.min ? true : false
    },
    garderobStateIncrease () {
      return this.additional.garderob.value === this.additional.garderob.max ? true : false
    },
    // addtime
    addtimeStateDecrease () {
      return this.additional.addtime.value === this.additional.addtime.min ? true : false
    },
    addtimeStateIncrease () {
      return this.additional.addtime.value === this.additional.addtime.max ? true : false
    }
  },
  // ---------------------
  // METHODS
  // ---------------------
  methods: {
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
    // fridger
    increaseFridger () {
      this.additional.fridger.value += 1
    },
    decreaseFridger () {
      if (this.additional.fridger.value === 0) {
        return
      }
      this.additional.fridger.value -= 1
    },
    // duhovka
    increaseDuhovka () {
      this.additional.duhovka.value += 1
    },
    decreaseDuhovka () {
      if (this.additional.duhovka.value === 0) {
        return
      }
      this.additional.duhovka.value -= 1
    },
    // microwaver
    increaseMicrowaver () {
      this.additional.microwaver.value += 1
    },
    decreaseMicrowaver () {
      if (this.additional.microwaver.value === 0) {
        return
      }
      this.additional.microwaver.value -= 1
    },
    // shkaf
    increaseShkaf () {
      this.additional.shkaf.value += 1
    },
    decreaseShkaf () {
      if (this.additional.shkaf.value === 0) {
        return
      }
      this.additional.shkaf.value -= 1
    },
    // dishes
    increaseDishes () {
      // 0 - 30 - 1 - 1.5 - 2 - 2.5 - 3
      this.additional.dishes.value += 1
    },
    decreaseDishes () {
      if (this.additional.dishes.value === 0) {
        return
      }
      this.additional.dishes.value -= 1
    },
    // glajka
    increaseGlajka () {
      this.additional.glajka.value += 1
    },
    decreaseGlajka () {
      if (this.additional.glajka.value === 0) {
        return
      }
      this.additional.glajka.value -= 1
    },
    // windows
    increaseWindows () {
      this.additional.windows.value += 1
    },
    decreaseWindows () {
      if (this.additional.windows.value === 0) {
        return
      }
      this.additional.windows.value -= 1
    },
    // balcon
    increaseBalcon () {
      this.additional.balcon.value += 1
    },
    decreaseBalcon () {
      if (this.additional.balcon.value === 0) {
        return
      }
      this.additional.balcon.value -= 1
    },
    // garderob
    increaseGarderob () {
      this.additional.garderob.value += 1
    },
    decreaseGarderob () {
      if (this.additional.garderob.value === 0) {
        return
      }
      this.additional.garderob.value -= 1
    },
    // addtime
    increaseAddtime () {
      this.additional.addtime.value += 1
    },
    decreaseAddtime () {
      if (this.additional.addtime.value === 0) {
        return
      }
      this.additional.addtime.value -= 1
    }
  }
});

app.$mount('#app');