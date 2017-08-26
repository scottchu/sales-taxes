const curry = require("./curry")

const around = (decorator, fn) => {
  return (...args) => decorator(fn, args)
}

module.exports = curry(around)