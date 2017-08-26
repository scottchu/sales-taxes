const { either, multiply } = require("../../common")
const { price, imported } = require("../../item")

const rate = either(0.05, 0)
const duty = multiply(price, rate(imported))

module.exports = duty