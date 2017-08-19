const { add, compose, multiply, reduce, round } = require("../common")

const TAX_RATE = 0.1
const DUTY_RATE = 0.05
const ROUNDING_UNIT = 0.05

const wave = multiply(0)

const calcTax = multiply(TAX_RATE)
const regularTax = (item) => calcTax(item.price)

const calcEmption = multiply(-TAX_RATE)
const exemption = (item) => (item.exempted ? calcEmption : wave)(item.price)

const calcDuty = multiply(DUTY_RATE)
const imposeDuty = (item) => (item.imported ? calcDuty : wave)(item.price)

const roundUpNearest5Cents = round.up(ROUNDING_UNIT)

const totalTax = reduce.by(add)([
  regularTax,
  exemption,
  imposeDuty,
])

const tax = compose([
  roundUpNearest5Cents,
  totalTax
])

module.exports = tax
