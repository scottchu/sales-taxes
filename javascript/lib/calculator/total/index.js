const { add, compose, multiply, round } = require("../../common")
const { unit, price } = require("../../item")
const tax = require("../tax")

module.exports = compose([
  round.up(0.01),
  multiply(add(price, tax), unit)
])