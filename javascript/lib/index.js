const FileReader = require("./FileReader")

function App(filePaths = []) {
  try {
    filePaths
      .map(FileReader.create())
      .map((lines) => console.log(lines))

  } catch(e) {
    console.error("Something went wrong,", e)
  }
}

module.exports = App