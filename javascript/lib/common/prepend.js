const curry = require("./curry")

const prepend = (list, item) => [item, ...list]

module.exports = curry(prepend)