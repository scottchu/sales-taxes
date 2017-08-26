const curry = require("./curry")

const before = (decorator, fn) => {
  return (...args) => {
    decorator(...args)
    return fn(...args)
  }
}

module.exports = curry(before)