const either = require("./either")
const identity = require("./identity")
const invoke = require("./invoke")
const is = require("./is")

const unwrap = either(invoke, identity, is.function)

module.exports = unwrap