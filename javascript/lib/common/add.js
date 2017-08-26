const constantize = require("./constantize")
const curry = require("./curry")

const add = (x, y) => {
  return (...args) => {
    return constantize(x)(...args) + constantize(y)(...args)
  }
}

module.exports = curry(add)