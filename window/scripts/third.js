const app = new Vue({
  data: {
    window: {
      dimentions: {
        width: 1400,
        height: 1200
      },
      profile: {
        price: 1000,
        thickness: 100
      },
      packet: {
        price: 600
      },
      percent: 10,
      type: 'tilt',
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
    profiles: [
      {
        title: 'Стандарт',
        textColor: 'text-muted',
        type: 'Rehau Blitz',
        packet: '32мм, 2 камеры',
        formula: '4x10x4x10x4',
        furnitura: 'Siegenia-Aubi, Favorit',
        color: 'белый',
        sealer: 'черный',
        show: false,
        price: 1000,
        furnitura: 500
      },
      {
        title: 'Комфорт',
        textColor: 'text-primary',
        type: 'Rehau Delight',
        packet: '32мм, 2 камеры',
        formula: '4x10x4x10x4',
        furnitura: 'Siegenia-Aubi, Favorit',
        color: 'белый',
        sealer: 'черный',
        show: false,
        price: 1100,
        furnitura: 600
      },
      { 
        title: 'Премиум',
        textColor: 'text-success',
        type: 'Rehau Brilliant',
        packet: '32мм, 2 камеры',
        formula: '4x10x4x10x4',
        furnitura: 'Siegenia-Aubi, Favorit',
        color: 'белый',
        sealer: 'черный',
        show: false,
        price: 1200,
        furnitura: 700
      },
      {
        title: 'Эксклюзив',
        textColor: 'text-danger',
        type: 'Rehau Geneo',
        packet: '32мм, 2 камеры',
        formula: '4x10x4x10x4',
        furnitura: 'Siegenia-Aubi, Favorit',
        color: 'белый',
        sealer: 'черный',
        show: false,
        price: 1300,
        furnitura: 800
      }
    ],
    packets: [
      { title: 'Packet 1', price: 600 },
      { title: 'Packet 2', price: 700 },
      { title: 'Packet 3', price: 800 },
      { title: 'Packet 4', price: 900 }
    ],
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
      return value ? value / 1000000 : null
    },
    roundDown (value) {
      return value ? Math.round(value) : null
    },
  },
  computed: {
    imagePath () {
      let path = null
      switch (this.window.type) {
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
    montageCost () {
      return (this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width) / 1000) * this.window.additions.montage.price
    },
    sillCost () {
      return (this.window.dimentions.width / 1000) * this.window.additions.sill.price
    },
    // CALC SLOP COST
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
    commonCost (costProduct, costWork, costAddittions) {
      const costCommon = parseInt(costProduct) + parseInt(costWork) + parseInt(costAddittions)
      return costCommon
    },
    clearForm () {
      this.window.dimentions.width = null
      this.window.dimentions.height = null
    },
    simpleWindow () {
      this.output.profile.total = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
      this.output.area = this.packetArea(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
      // price calculate
      this.output.cost.window = this.productCost(this.output.profile.total, this.output.area, this.window.profile.price, this.window.packet.price)
      this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
      this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.work, this.output.cost.additional)
      // this.clearForm()
    },
    secondWindow () {
        this.output.profile.outer = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
        this.output.profile.inner = this.profileInnerLength(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
        this.output.profile.total = parseInt(this.output.profile.outer) + parseInt(this.output.profile.inner)
        this.output.area = this.packetArea(this.window.dimentions.height - this.window.profile.thickness * 2, this.window.dimentions.width - this.window.profile.thickness * 2, this.window.profile.thickness)
        this.output.cost.window = this.productCost(this.output.profile.total, this.output.area, this.window.profile.price, this.window.packet.price)
        this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
        this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.work) + this.window.furnitura.turn
        // this.clearForm()
    },
    thirdWindow () {
        this.output.profile.outer = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
        this.output.profile.inner = this.profileInnerLength(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
        this.output.profile.total = parseInt(this.output.profile.outer) + parseInt(this.output.profile.inner)
        this.output.area = this.packetArea(this.window.dimentions.height - this.window.profile.thickness * 2, this.window.dimentions.width - this.window.profile.thickness * 2, this.window.profile.thickness)
        this.output.cost.window = this.productCost(this.output.profile.total, this.output.area, this.window.profile.price, this.window.packet.price)
        this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
        this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.work) + this.window.furnitura.titl
        // this.clearForm()
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
      switch (this.window.type) {
        case 'simple':
          this.simpleWindow()
          break
        case 'turn':
          this.secondWindow()
          break
        case 'tilt':
          this.thirdWindow()
          break
        default:
          break
      }
    },
    onCalc () {
      // check if fields are empty
      if (!this.window.dimentions.width || !this.window.dimentions.height) {
        alert('error')
        return
      }
      // if fields are not empty
      this.checkAdditions()
      this.selectCalc()
    }
  }
});

app.$mount('#app');