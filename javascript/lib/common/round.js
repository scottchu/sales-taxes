const round = fn => {
  return (factor, decimal = 2) => {
    return value => parseFloat((fn(value / factor) * factor).toFixed(decimal))
  }
}

round.up = round(Math.ceil)

round.to = round(Math.round)

round.down = round(Math.floor)

module.exports = round