const constant = require("./constant")
const is = require("./is")

const constantize = arg => {
  return is.function(arg) ? arg : constant(arg)
}

module.exports = constantize