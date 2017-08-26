const test = require("tape")

const curry = require("../../lib/common/curry")

test("[curry] function () => 10", t => {
  const fn = () => 10

  t.equal(fn, curry(fn), "returns the same function")

  t.end()
})

test("[curry] function (x, y, z)", t => {
  const fn = (x, y, z) => x + y * z

  const curried = curry(fn)

  t.notEqual(fn, curried, "return a new function when curried")

  t.equal(fn(1, 2, 3), curried(1)(2)(3), "curry(fn) takes (x)(y)(z)")

  t.equal(fn(1, 2, 3), curried(1)(2, 3), "curry(fn) takes (x)(y, z)")

  t.equal(fn(1, 2, 3), curried(1, 2)(3), "curry(fn) takes (x, y)(z)")

  t.equal(fn(1, 2, 3), curried(1, 2, 3), "curry(fn) takes (x, y, z)")

  t.end()
})

test("[curry] function (x, y, z) with specific arity", t => {
  const fn = (x, y, z) => x + y + (z || 0)

  const curried = curry(fn, 2)

  t.notEqual(fn, curried, "return a new function when curried")

  t.equal(fn(1, 2, 0), curried(1)(2), "curry(fn, 2) takes (x)(y)")

  t.equal(fn(1, 2, 0), curried(1, 2), "curry(fn, 2) takes (x, y)")

  t.equal(fn(1, 2, 3), curried(1, 2, 3), "curry(fn, 2) takes (x, y)")

  t.end()
})