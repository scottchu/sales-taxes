const { empty, filter, not, pipe, split } = require("../common")

const readFile = require("./readFile")

const rules = [
  readFile({encoding: "utf-8"}),
  split("\n"),
  filter(not(empty))
]

module.exports = pipe(rules)