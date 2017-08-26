const { either, get, multiply } = require("../../common")

const multiplyPriceWith = multiply(get("price"))

const duty = either(
  multiplyPriceWith(0.05),
  multiplyPriceWith(0),
  get("imported")
)

module.exports = duty