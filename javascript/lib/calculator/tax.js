const { add, compose, reduce, round } = require("../common")

const duty = require("./rules/duty")
const exemption = require("./rules/exemption")
const tax = require("./rules/tax")

module.exports = compose([
  round.up(0.05),
  reduce.by(add)([
    duty,
    exemption,
    tax
  ])
])
