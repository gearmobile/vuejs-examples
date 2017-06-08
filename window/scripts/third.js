const app = new Vue({
  data: {
    window: {
      dimentions: {
        width: null,
        height: null
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
          price: 1000
        },
        slope: {
          price: 1000
        },
        sill: {
          price: 1000
        }
      }
    },
    profiles: [
      { title: 'Profile 1', price: 1000, furnitura: 500 },
      { title: 'Profile 2', price: 1100, furnitura: 600 },
      { title: 'Profile 3', price: 1200, furnitura: 700 },
      { title: 'Profile 4', price: 1300, furnitura: 800 }
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
        total: null
      }
    }
  },
  methods: {
    profileOuterLength (height, width) {
      const totalLength = ((parseInt(width) + parseInt(height)) * 2) / 1000
      return totalLength
    },
    profileInnerLength (height, width, profile) {
      const innerWidth = parseInt(width) - parseInt(profile) * 2
      const innerHeight = parseInt(width) - parseInt(profile) * 2
      const totalLength = ((innerWidth + innerHeight) * 2) / 1000
      return totalLength
    },
    packetArea (height, width, profile) {
      const packetHeight = parseInt(height) - parseInt(profile) * 2
      const packetWidth = parseInt(width) - parseInt(profile) * 2
      const packetArea = (packetWidth * packetHeight) / 1000000
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
    commonCost (costProduct, costWork) {
      const costCommon = parseInt(costProduct) + parseInt(costWork)
      return costCommon
    },
    clearForm () {
      this.window.dimentions.width = null
      this.window.dimentions.height = null
    },
    simpleWindow () {
      this.output.profile.total = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
      this.output.area = this.packetArea(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
      this.output.cost.window = this.productCost(this.output.profile, this.output.area, this.window.profile.price, this.window.packet.price)
      this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
      this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.window)
      this.clearForm()
    },
    secondWindow () {
        this.output.profile.outer = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
        this.output.profile.inner = this.profileInnerLength(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
        this.output.profile.total = parseInt(this.output.profile.outer) + parseInt(this.output.profile.inner)
        this.output.area = this.packetArea(this.window.dimentions.height - this.window.profile.thickness * 2, this.window.dimentions.width - this.window.profile.thickness * 2, this.window.profile.thickness)
        this.output.cost.window = this.productCost(this.output.profile.total, this.output.area, this.window.profile.price, this.window.packet.price)
        this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
        this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.work) + this.window.furnitura.turn
        this.clearForm()
    },
    thirdWindow () {
        this.output.profile.outer = this.profileOuterLength(this.window.dimentions.height, this.window.dimentions.width)
        this.output.profile.inner = this.profileInnerLength(this.window.dimentions.height, this.window.dimentions.width, this.window.profile.thickness)
        this.output.profile.total = parseInt(this.output.profile.outer) + parseInt(this.output.profile.inner)
        this.output.area = this.packetArea(this.window.dimentions.height - this.window.profile.thickness * 2, this.window.dimentions.width - this.window.profile.thickness * 2, this.window.profile.thickness)
        this.output.cost.window = this.productCost(this.output.profile.total, this.output.area, this.window.profile.price, this.window.packet.price)
        this.output.cost.work = this.workCost(this.output.cost.window, this.window.percent)
        this.output.cost.total = this.commonCost(this.output.cost.window, this.output.cost.work) + this.window.furnitura.titl
        this.clearForm()
    },
    onCalc () {
      if (!this.window.dimentions.width && !this.window.dimentions.height) {
        alert('error')
        return
      }
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
    }
  }
});

app.$mount('#app');