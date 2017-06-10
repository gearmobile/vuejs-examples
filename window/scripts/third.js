const app = new Vue({
  data: {
    state: {
      profile: 'Стандарт',
      window: 'simple'
    },
    // CURRENT WINDOW
    // ---------------------
    window: {
      dimentions: {
        width: 1400,
        height: 1200
      },
      sizes: {
        minH: 1000,
        maxH: 1650,
        stepH: 10,
        minW: 400,
        maxW: 1400,
        stepW: 10
      },
      profile: {
        price: 1000,
        thickness: 100
      },
      packet: {
        price: 600
      },
      percent: 10,
      types: [
        { 
          title: 'simple',
          name: 'Глухое окно'
        },
        {
          title: 'turn',
          name: 'Поворотное окно'
        },
        { 
          title: 'tilt',
          name: 'Поворотно-откидное окно'
        }
      ],
      furnitura: {
        tilt: 2000,
        turn: 3000
      },
      checked: [],
      additions: {
        montage: {
          price: 386
        },
        slope: {
          price: 193
        },
        sill: {
          price: 1191
        }
      }
    },
    // PROFILES
    // ---------------------
    profiles: [
      {
        title: 'Стандарт',
        details: {
          type: 'Rehau Blitz',
          packet: '32мм, 2 камеры',
          formula: '4x10x4x10x4',
          furnitura: 'Siegenia-Aubi, Favorit',
          color: 'белый',
          sealer: 'черный',
        },
        price: {
          profile: 1000,
          furnitura: 500,
          packet: 500
        },
        preview: './images/doggy-01.jpg',
        show: true
      },
      {
        title: 'Комфорт',
        details: {
          type: 'Rehau Delight',
          packet: '32мм, 2 камеры',
          formula: '4x10x4x10x4',
          furnitura: 'Siegenia-Aubi, Favorit',
          color: 'белый',
          sealer: 'черный',
        },
        price: {
          profile: 1100,
          furnitura: 600,
          packet: 600
        },
        preview: './images/doggy-02.jpg',
        show: false
      },
      { 
        title: 'Премиум',
        details: {
          type: 'Rehau Brilliant',
          packet: '32мм, 2 камеры',
          formula: '4x10x4x10x4',
          furnitura: 'Siegenia-Aubi, Favorit',
          color: 'белый',
          sealer: 'черный',
        },
        price: {
          profile: 1200,
          furnitura: 700,
          packet: 700
        },
        preview: './images/doggy-04.jpg',
        show: false
      },
      {
        title: 'Эксклюзив',
        details: {
          type: 'Rehau Geneo',
          packet: '32мм, 2 камеры',
          formula: '4x10x4x10x4',
          furnitura: 'Siegenia-Aubi, Favorit',
          color: 'белый',
          sealer: 'черный',
        },
        price: {
          profile: 1300,
          furnitura: 800,
          packet: 800
        },
        preview: './images/doggy-05.jpg',
        show: false
      },
    ],
    // OUTPUT
    // ---------------------
    output: {
      area: null,
      profile: {
        total: null,
        outer: null,
        inner: null
      },
      cost: {
        window: null,
        work: null,
        total: null,
        additional: null
      }
    }
  },
  filters: {
    singleDivider (value) {
      return value ? value / 1000 : null
    },
    doubleDivider (value) {
      return value ? value / 100000 : null
    },
    roundDown (value) {
      return value ? Math.round(value) : null
    },
  },
  computed: {
    imagePath () {
      let path = null
      switch (this.state.window) {
        case 'simple':
          path = './images/doggy-01.jpg'
          break
        case 'turn':
          path = './images/doggy-02.jpg'
          break
        case 'tilt':
          path = './images/doggy-04.jpg'
          break
        default:
          path = './images/doggy-04.jpg'
      }
      return path
    },
    // CALC MONTAGE COST
    // --------------------------
    montageCost () {
      return (this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width) / 1000) * this.window.additions.montage.price
    },
    // CALC SILL COST
    // --------------------------
    sillCost () {
      return (this.window.dimentions.width / 1000) * this.window.additions.sill.price
    },
    // CALC SLOP COST
    // --------------------------
    slopeCost () {
      return (this.profileQuater(this.window.dimentions.height, this.window.dimentions.width) / 1000) * this.window.additions.slope.price
    }
  },
  methods: {
    profileQuater (height, width) {
      const totalLength = parseInt(height) * 2 + parseInt(width)
      return totalLength
    },
    profileOuterLength (height, width) {
      const totalLength = (parseInt(width) + parseInt(height)) * 2
      return totalLength
    },
    profileInnerLength (height, width, profile) {
      const innerWidth = parseInt(width) - parseInt(profile) * 2
      const innerHeight = parseInt(width) - parseInt(profile) * 2
      const totalLength = (innerWidth + innerHeight) * 2
      return totalLength
    },
    packetArea (height, width, profile) {
      const packetHeight = parseInt(height) - parseInt(profile) * 2
      const packetWidth = parseInt(width) - parseInt(profile) * 2
      const packetArea = packetWidth * packetHeight
      return packetArea
    },
    productCost (profileLength, packetArea, profileCost, packetCost) {
      const costRama = parseInt(profileLength) * parseInt(profileCost)
      const costPacket = parseInt(packetArea) * parseInt(packetCost)
      const totalCost = costRama + costPacket
      return totalCost
    },
    workCost (totalSum, percent) {
      const costWork = (parseInt(totalSum) * parseInt(percent)) / 100
      return costWork
    },
    commonCost (costProduct, costWork, costAddittions) { // TODO не работает общая сумма
      const costCommon = (costAddittions === null) ? parseInt(costProduct) + parseInt(costWork) : parseInt(costProduct) + parseInt(costWork) + parseInt(costAddittions)
      return costCommon
    },
    simpleWindow () {
      this.output.profile.total = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
      this.output.area = this.packetArea(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
      //
      this.output.cost.window = this.productCost(this.output.profile.total, this.output.area, this.window.profile.price, this.window.packet.price)
      this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
      this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.work, this.output.cost.additional)
    },
    turnWindow () {
        this.output.profile.outer = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
        this.output.profile.inner = this.profileInnerLength(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
        this.output.profile.total = parseInt(this.output.profile.outer) + parseInt(this.output.profile.inner)
        this.output.area = this.packetArea(this.window.dimentions.height - this.window.profile.thickness * 2, this.window.dimentions.width - this.window.profile.thickness * 2, this.window.profile.thickness)
        this.output.cost.window = this.productCost(this.output.profile.total, this.output.area, this.window.profile.price, this.window.packet.price)
        this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
        this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.work) + this.window.furnitura.turn
    },
    tiltWindow () {
        this.output.profile.outer = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
        this.output.profile.inner = this.profileInnerLength(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
        this.output.profile.total = parseInt(this.output.profile.outer) + parseInt(this.output.profile.inner)
        this.output.area = this.packetArea(this.window.dimentions.height - this.window.profile.thickness * 2, this.window.dimentions.width - this.window.profile.thickness * 2, this.window.profile.thickness)
        //
        this.output.cost.window = this.productCost(this.output.profile.total, this.output.area, this.window.profile.price, this.window.packet.price)
        this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
        this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.work) + this.window.furnitura.titl
    },
    checkAdditions () {
      const arr = this.window.checked
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 'montage') {
          this.output.cost.additional += parseInt(this.window.additions.montage.price)
        }
        if (arr[i] === 'sill') {
          this.output.cost.additional += parseInt(this.window.additions.sill.price)
        }
        if (arr[i] === 'slope') {
          this.output.cost.additional += parseInt(this.window.additions.slope.price)
        }
      }
    },
    selectCalc () {
      switch (this.state.window) {
        case 'simple':
          this.simpleWindow()
          break
        case 'turn':
          this.turnWindow()
          break
        case 'tilt':
          this.tiltWindow()
          break
        default:
          break
      }
    },
    onCalc () {
      this.checkAdditions()
      this.selectCalc()
    }
  }
});

app.$mount('#app');