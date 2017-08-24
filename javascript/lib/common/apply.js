const apply = fn => args => fn.apply(null, args)

apply.to = args => fn => apply(fn)(args)

module.exports = apply