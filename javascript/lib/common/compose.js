const reduce = require("./reduce")

const compose = (fx, fy) => (...args) => fx(fy(...args))

module.exports = reduce.fn(compose)