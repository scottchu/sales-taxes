const curry = require("./curry")

const append = (list, item) => [...list, item]

module.exports = curry(append)