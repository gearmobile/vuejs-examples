
const app = new Vue({
  data: {
    window: {
      width: null,
      height: null,
      profilePrice: 1000,
      packetPrice: 600,
      thickness: 100,
      percent: 10
    },
    profiles: [
      { title: 'Profile 1', price: 1000 },
      { title: 'Profile 2', price: 1100 },
      { title: 'Profile 3', price: 1200 },
      { title: 'Profile 4', price: 1300 }
    ],
    packets: [
      { title: 'Packet 1', price: 600 },
      { title: 'Packet 2', price: 700 },
      { title: 'Packet 3', price: 800 },
      { title: 'Packet 4', price: 900 }
    ],
    output: {
      profile: null,
      area: null,
      windowCost: null,
      workCost: null,
      totalCost: null
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
      this.window.width = null
      this.window.height = null
    },
    simpleWindow () {
      this.output.profile = this.profileOuterLength(this.window.height, this.window.width)
      this.output.area = this.packetArea(this.window.height, this.window.width, this.window.thickness)
      this.output.windowCost = this.productCost(this.output.profile, this.output.area, this.window.profilePrice, this.window.packetPrice)
      this.output.workCost = this.workCost(this.output.windowCost, this.window.percent)
      this.output.totalCost = this.commonCost(this.output.windowCost, this.output.workCost)
      this.clearForm()
    },
    secondWindow () {
      this.output.profileOuter = this.profileOuterLength(this.window.height, this.window.width)
      this.output.profileInner = this.profileInnerLength(this.window.height, this.window.width, this.window.thickness)
      this.output.profile = this.output.profileOuter + this.output.profileInner
      this.output.area = this.packetArea(this.window.height - this.window.thickness * 2, this.window.width - this.window.thickness * 2, this.window.thickness)
      this.output.windowCost = this.productCost(this.output.profile, this.output.area, this.window.profilePrice, this.window.packetPrice)
      this.output.workCost = this.workCost(this.output.windowCost, this.window.percent)
      this.output.totalCost = this.commonCost(this.output.windowCost, this.output.workCost) + this.window.furnitura
      this.clearForm()
    },
    onCalc () {
      if (!this.window.width && !this.window.height) {
        alert('error')
      } else {
        this.simpleWindow()
      }
    }
  }
});
app.$mount('#app');