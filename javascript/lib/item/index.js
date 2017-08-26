const { get } = require("../common")

module.exports = {
  unit: get("unit", 1),
  name: get("name"),
  price: get("price"),
  tax: get("tax"),
  total: get("total"),
  imported: get("imported", false),
  exempted: get("exempted", false)
}