const not = require("./not")

const is = type => {
  if (typeof type === "function")
    return input => type(input)

  return input => typeof input === type
}

is.function = is("function")

is.object = is("object")

is.array = is(Array.isArray)

is.not = type => not(is(type))

is.not.function = not(is.function)

is.not.object = not(is.object)

is.not.array = not(is.array)

module.exports = is