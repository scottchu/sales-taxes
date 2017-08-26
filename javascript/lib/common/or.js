const curry = require("./curry")

const or = (lhs, rhs) => (...args) => lhs(...args) || rhs(...args)

module.exports = curry(or)