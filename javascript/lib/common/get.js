const get = (key, defaultValue) => input => {
  return input[key] != null ? input[key] : defaultValue
}

module.exports = get