const constantize = require("./constantize")
const unwrap = require("./unwrap")

const round = fn => {
  return (factor, decimal = 2) => {
    return value => {
      return parseFloat((fn(unwrap(value) / factor) * factor).toFixed(decimal))
    }
  }
}

round.up = round(Math.ceil)

round.to = round(Math.round)

round.down = round(Math.floor)

module.exports = round