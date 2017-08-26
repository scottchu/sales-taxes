const { add, append, compose, constant, either, get, map, round, reduce, toPrecision, log } = require("../common")

const { unit, imported, name, tax, total } = require("../item")

const concatString = require("./concatString")

const formatItem = reduce.by(concatString)([
  unit,
  either("imported", null, imported),
  name,
  constant(":"),
  total
])

const formatItems = map(formatItem)

const roundToNearest1Cents = compose([
  toPrecision(2),
  round.up(0.001)
])

const sum = reduce(add)

const calculatItemsTotal = compose([
  roundToNearest1Cents,
  sum,
  map(total)
])

const formatItemsTotal = reduce.by(concatString)([
  constant("Total:"),
  calculatItemsTotal
])

const calculateSalesTaxes = compose([
  roundToNearest1Cents,
  sum,
  map(tax)
])

const formatSalesTaxes = reduce.by(concatString)([
  constant("Sales Taxes:"),
  calculateSalesTaxes
])

const rules = [
  formatItems,
  formatSalesTaxes,
  formatItemsTotal
]

module.exports = reduce.by(append)(rules)
