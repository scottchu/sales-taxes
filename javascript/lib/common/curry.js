const is = require("./is")
const get = require("./get")

const size = get("length")

const curry = (fn, stored = []) => {
  const length = size(fn)
  if (length === 0)
    return fn

  return (...args) => {
    if (size(stored) + size(args) < length)
      return curry(fn, [...stored, ...args])

    return fn(...stored)
  }
}

curry.fnArg = fn => {
  return value => {
    if (is.function(value))
      return (...args) => fn(value(...args))

    return fn(value)
  }
}

module.exports = curry