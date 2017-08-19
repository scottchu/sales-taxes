const loader = require("./loader")
const parser = require("./parser")
const calculator = require("./calculator")
const format = require("./format")
const printer = require("./printer")

const { map, pipe } = require("./common")

module.exports = map(pipe([
  loader,
  parser,
  calculator,
  format,
  printer
]))