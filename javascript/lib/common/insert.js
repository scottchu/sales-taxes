const curry = require("./curry")

const insert = (key, value, list) => {
  return [...list.slice(0, key), value, ...list.slice(key)]
}

module.exports = curry(insert)