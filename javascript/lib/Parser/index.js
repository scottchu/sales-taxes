const { compose, get, isNull, join, map, mapTo, match, merge, not, reduce, slice } = require("../common")

const unitPattern = /^(\d+)/
const parseUnit = compose([
  mapTo("unit"),
  parseInt,
  get(1, "1"),
  match(unitPattern)
])

const namePattern = /^\d+ ((.*)imported )?(.*) at/
const parseName = compose([
  mapTo("name"),
  join(""),
  slice(2),
  match(namePattern)
])

const pricePattern = /^.* at (\d+\.\d+)/
const parsePrice = compose([
  mapTo("price"),
  parseFloat,
  get(1),
  match(pricePattern)
])

const importedPattern = /imported/
const parseImported = compose([
  mapTo("imported"),
  not(isNull),
  match(importedPattern)
])

const exemptedPattern = /book|chocolate|pill/
const parseExempted = compose([
  mapTo("exempted"),
  not(isNull),
  match(exemptedPattern)
])

const rules = [
  parseUnit,
  parseName,
  parsePrice,
  parseExempted,
  parseImported
]

module.exports = map(reduce.by(merge)(rules))
