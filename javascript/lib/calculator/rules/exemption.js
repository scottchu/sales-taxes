const { either, get, multiply } = require("../../common")

const multiplyPriceWith = multiply(get("price"))

const exemption = either(
  multiplyPriceWith(-0.1),
  multiplyPriceWith(0),
  get("exempted")
)

module.exports = exemption