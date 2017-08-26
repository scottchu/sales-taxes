const concat = require("./concat")
const get = require("./get")

const length = get("length")

const curry = (fn, arity = length(fn), prev = []) => {
  if (arity === 0)
    return fn

  return (...args) => {
    const next = concat(prev, args)

    if (length(next) < arity)
      return curry(fn, arity, next)

    return fn(...next)
  }
}

module.exports = curry