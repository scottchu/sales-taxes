const constantize = require("./constantize")
const curry = require("./curry")
const is = require("./is")

const multiply = (x, y) => {
  return (...args) => {
    return constantize(x)(...args) * constantize(y)(...args)
  }
}

module.exports = curry(multiply)