const formulas = {
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
  }
}

export default formulas
