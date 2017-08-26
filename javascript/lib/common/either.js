const and = require("./and")
const constantize = require("./constantize")
const curry = require("./curry")
const or = require("./or")

const either = (lhs, rhs, cond) => {
  return or(
    and(
      constantize(cond),
      constantize(lhs)
    ),
    constantize(rhs)
  )
}

module.exports = curry(either)