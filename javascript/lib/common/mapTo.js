const curry = require("./curry")

const createObject = (key, defaultValue, value) => {
  return {
    [key]: value == null && defaultValue || value
  }
}

const mapTo = (key, defaultValue) => {
  return curry.fnArg(value => createObject(key, defaultValue, value))
}

module.exports = mapTo