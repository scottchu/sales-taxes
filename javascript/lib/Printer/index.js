const Printer = stdOutput => {
  return items => {
    const max = Math.max.apply(null, items.map(item => item.length))
    const pad = "=".repeat(max)

    stdOutput(pad)
    items.map(stdOutput)
    stdOutput(pad + "\n")
  }
}

module.exports = Printer(x => console.log(x))