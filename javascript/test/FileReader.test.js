const test = require("tape")
const FileReader = require("../lib/FileReader")

const { resolve } = require("path")

test("FileReader returns lines when given a valid file path", (t) => {

  const filePath = resolve(__dirname, "fixture/input")

  const expectedOutput = [
    "1 book at 12.49",
    "1 music CD at 14.99",
    "1 chocolate bar at 0.85",
    "1 imported box of chocolates at 10.00",
    "1 imported bottle of perfume at 47.50"
  ]

  const fileReader = FileReader.create()

  t.deepEqual(fileReader(filePath), expectedOutput)

  t.end()
})

test("FileReader throws an error when given invalid file path", (t) => {

  const filePath = resolve(__dirname, "fixture/nonexistent-file")

  const fileReader = FileReader.create()

  t.throws(() => fileReader(filePath), FileReader.Error.FileNotFound)

  t.end()
})

test("FileReader.lineIsNotEmpty checks if line is not empty", (t) => {
  t.ok(FileReader.lineIsNotEmpty("hello world"))
  t.notOk(FileReader.lineIsNotEmpty(""))

  t.end()
})