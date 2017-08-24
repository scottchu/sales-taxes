const { resolve } = require("path")

const resolvePath = cwd => path => resolve(cwd, path)

module.exports = resolvePath