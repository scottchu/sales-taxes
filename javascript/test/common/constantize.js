const test = require("tape")

const constantize = require("../../lib/common/constantize")

test("[constantize] when given a literal as input", t => {
  const value = 1

  const constantized = constantize(value)

  t.equal(typeof constantized, "function", "returns a function")

  t.equal(constantized(), value, "returns the value when called")

  t.end()
})

test("[constantize] when given a function as input", t => {
  const value = () => 2

  const constantized = constantize(value)

  t.equal(typeof constantized, "function", "returns a function")

  t.equal(constantized, value, "returns the input")

  t.end()
})