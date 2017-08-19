const is = require("./is")

const join = delimiter => {
  if (is.function(delimiter))
    return (list) => list.join(delimiter(list))

  return (list) => list.join(delimiter)
}

module.exports = join