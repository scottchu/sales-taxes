const either = (lhs, rhs) => cond => {
  if (typeof cond === "function")
    return item => either(lhs, rhs)(cond(item))

  return cond && lhs || rhs
}

module.exports = either