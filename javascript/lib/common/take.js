const take = num => list => list.slice(0, num)

take.args = num => (...args) => args.slice(0, num)

module.exports = take