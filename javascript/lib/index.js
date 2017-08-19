const loader = require("./Loader")
const parser = require("./Parser")
const calculator = require("./Calculator")
const format = require("./Format")
const printer = require("./Printer")

const { map, pipe } = require("./common")

const App = map(pipe([
  loader,
  parser,
  calculator,
  format,
  printer
]))


module.exports = App