const curry = require("./curry")

const after = (decorator, fn) => {
  return (...args) => {
    const vale = fn(...args)
    decorator(...args)
    return vale
  }
}

module.exports = curry(after)