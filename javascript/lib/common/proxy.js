const proxy = fn => input => {
  fn(input)
  return input
}

module.exports = proxy