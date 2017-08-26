const { add, compose, get, times, reduce, round } = require("../common")

const tax = require("./tax")

const totalPerUnit = reduce.by(add)([
  get("price"),
  tax
])

const calcTotal = reduce.by(times)([
  get("unit", 1),
  totalPerUnit
])

const total = compose([
  round.up(0.001),
  calcTotal
])

module.exports = total