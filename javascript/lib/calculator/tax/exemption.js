const { either, multiply } = require("../../common")
const { price, exempted } = require("../../item")

const rate = either(-0.1, 0)
const exemption = multiply(price, rate(exempted))

module.exports = exemption