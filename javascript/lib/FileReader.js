const { existsSync, readFileSync } = require("fs")

const FileReaderError = {
  FileNotFound: new Error("Unable to read file from given path.")
}

const lineIsNotEmpty = (line) => (
  line.length > 0
)

// This version of FileReader is designed with the intent
// to avoid using Node.js Stream or any 3rd party
// libraries such as RX.js
const create = () => {
  const config = {encoding: "utf-8"}

  return (filePath) => {
    if (!existsSync(filePath)) {
      throw FileReaderError.FileNotFound
    }

    return readFileSync(filePath, config)
      .split("\n")
      .filter(lineIsNotEmpty)
  }
}

module.exports = {
  create,
  lineIsNotEmpty,
  Error: FileReaderError
}