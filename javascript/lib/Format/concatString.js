const { constant, compose, empty, filter, join, not, take } = require("../common")

const concatString = compose([
  join(" "),
  filter(not(empty)),
  take.args(2)
])

module.exports = concatString