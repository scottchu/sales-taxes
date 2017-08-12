const test = require("tape")
const read = require("../../lib/io/read")

test("read file from given path", (t) => {
  const path = "../../fixtures/input-1"

  const expectedOutput = [
    "1 book at 12.49",
    "1 music CD at 14.99",
    "1 chocolate bar at 0.85"
  ]

  t.deepEqual(read(path), expectedOutput)

  t.end()
})

test("throw error when given invalid file path", (t) => {
  t.end()

})