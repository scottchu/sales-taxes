const { add, compose, reduce, round } = require("../../common")

const duty = require("./duty")
const exemption = require("./exemption")
const tax = require("./tax")

module.exports = compose([
  round.up(0.05),
  reduce.fn(add)([
    duty,
    exemption,
    tax
  ])
])
