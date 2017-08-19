const { compose, identity, map, mapTo, merge, reduce } = require("../common")

const tax = require("./tax")
const total = require("./total")

const parseTax = compose([
  mapTo("tax"),
  tax
])
const parseTotal = compose([
  mapTo("total"),
  total
])

const rules = [
  identity,
  parseTax,
  parseTotal
]

const itemTotal = reduce.by(merge)(rules)

module.exports = map(itemTotal)
