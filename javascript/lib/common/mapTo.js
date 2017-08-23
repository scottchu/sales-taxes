const is = require("./is")
const isNull = require("./isNull")

const mapTo = (key, defaultValue) => {
  return value => {
    if (is.function(value))
      return (...args) => mapTo(key, defaultValue, value(...args))

    return { [key]: isNull(value) ? defaultValue : value }
  }
}

module.exports = mapTo