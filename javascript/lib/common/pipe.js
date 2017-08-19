const reduce = require("./reduce")

const pipe = (fx, fy) => (...args) => fy(fx(...args))

module.exports = reduce.fn(pipe)