const around = require("./around")
const isNull = require("./isNull")

const maybe = around((fn, arg) => {
  if (not(isNull)(arg))
    return fn(arg)
})

module.exports = maybe