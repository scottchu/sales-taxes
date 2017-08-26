const test = require("tape")

const around = require("../../lib/common/around")

test("[around] given decorator and method", t => {
  const add = (x, y) => x + y

  const decorator = (method, args) => {
    t.equal(method, add, "yields function to decorator")
    t.deepEqual(args, [2, 3], "yields arguments to decorator")
  }

  const arounded = around(decorator, add)

  t.equal(typeof arounded, "function", "returns a function")

  arounded(2, 3)

  t.end()
})
