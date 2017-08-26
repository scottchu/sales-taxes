const { multiply } = require("../../common")
const { price } = require("../../item")

const rate = 0.1
const tax = multiply(price, rate)

module.exports = tax