const reverse = require("./reverse")

const swap = fn => (...args) => fn(reverse(args))

module.exports = swap