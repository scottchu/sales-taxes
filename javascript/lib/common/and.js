const curry = require("./curry")

const and = (lhs, rhs) => (...args) => lhs(...args) && rhs(...args)

module.exports = curry(and)