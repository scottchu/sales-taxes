const { add, compose, get, multiply, times, reduce, round } = require("../common")

const tax = require("./tax")

const roundToNearest1Cents = round.up(0.001)

const totalPerUnit = reduce.by(add)([
  get("price"),
  tax
])

const calcTotal = reduce.by(times)([
  get("unit", 1),
  totalPerUnit
])

const total = compose([
  roundToNearest1Cents,
  calcTotal
])

module.exports = total