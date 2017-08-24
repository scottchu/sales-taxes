const parser = require("minimist")

const { get, pipe, slice } = require("../common")

const parseArgs = pipe([
  slice(2),
  parser,
  get("_"),
])

module.exports = parseArgs