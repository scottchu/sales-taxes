const test = require("tape")

const either = require("../../lib/common/either")

test("[either] given lhs fn, rhs fn, and a condition", t => {
  const lhs = (x) => x + 1
  const rhs = (x) => x + 2

  const cond = (x) => x < 2

  const fn = either(lhs, rhs, cond)

  t.equal(fn(1), lhs(1), "returns lhs result")
  t.equal(fn(2), rhs(2), "returns rhs result")

  t.end()
})