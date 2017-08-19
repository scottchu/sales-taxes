const is = require("./is")

const split = delimiter => {
  if (is.function(delimiter))
    return string => split(delimiter(string))(string)

  return string => string.split(delimiter)
}

module.exports = split