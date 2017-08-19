const { existsSync, readFileSync } = require("fs")
const error = require("./error")

const defaultConfig = {
  encoding: "utf-8"
}

const readFile = (config = defaultConfig) => {
  return (filePath) => {
    if (!existsSync(filePath))
      throw error.FileNotFound

    return readFileSync(filePath, config)
  }
}

module.exports = readFile