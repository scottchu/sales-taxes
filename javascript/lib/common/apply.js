const curry = require("./curry")

const apply = curry((fn, args) => fn.apply(null, args))

apply.with = curry((args, fn) => apply(fn, args))

module.exports = apply