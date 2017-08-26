const reduce = (...args) => list => {
  return list.reduce(...args)
}

reduce.by = (operationFn) => {
  return reduce((fx, fy) => {
    return (...args) => operationFn(fx(...args), fy(...args))
  })
}

reduce.fn = (operationFn) => {
  return reduce((fx, fy) => {
    const fn = operationFn(fx, fy)
    return (...args) => fn(...args)
  })
}

module.exports = reduce