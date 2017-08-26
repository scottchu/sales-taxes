const test = require("tape")

const or = require("../../lib/common/or")

test("[or] given lhs and rhs", t => {
  const fn = or(() => true, () => true)

  t.equal(typeof fn, "function", "returns a new function")

  t.end()
})

test("[or] when lhs returns truthy", t => {
  fx = () => 1
  fy = () => "test"
  const fn = or(fx, fy)

  t.equal(fn(), fx(), "returned the result of lhs")

  t.end()
})

test("[or] when lhs returns falsey", t => {
  fx = () => false
  fy = () => "test"
  const fn = or(fx, fy)

  t.equal(fn(), fy(), "returned the result of rhs")

  t.end()
})
