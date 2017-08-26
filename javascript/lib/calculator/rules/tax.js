const { compose, get, multiply } = require("../../common")

const tax = multiply(get("price"), 0.1)

module.exports = tax