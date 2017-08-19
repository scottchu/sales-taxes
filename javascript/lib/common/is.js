const is = type => {
  if (typeof type === "function")
    return input => type(input)

  return input => typeof input === type
}

is.function = is("function")
is.object = is("object")
is.array = is(Array.isArray)

module.exports = is