const { compose, map, prepend } = require("../common")

const parseArgv = require("./parseArgv")
const absPath = require("./absPath")

module.exports = compose([
  compose,
  prepend([parseArgv]),
  map,
  absPath
])