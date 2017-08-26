const test = require("tape")

const and = require("../../lib/common/and")

test("[and] given lhs and rhs", t => {
  const fn = and(() => true, () => true)

  t.equal(typeof fn, "function", "returns a new function")

  t.end()
})

test("[and] when lhs returns falsey", t => {
  const fx = () => 0
  const fy = () => "test"
  const fn = and(fx, fy)

  t.equal(fn(), fx(), "returned the result of lhs")

  t.end()
})

test("[and] when lhs returns truthy", t => {
  const fx = () => 1
  const fy = () => "test"
  const fn = and(fx, fy)

  t.equal(fn(), fy(), "returned the result of rhs")

  t.end()
})
