const _ = require("ramda")
const { formatMoney } = require("accounting")

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

const isLastInStock = _.compose(_.prop("in_stock"), _.last)

// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

const nameOfFirstCar = _.compose(_.prop("name"), _.head)

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

const _average = function (xs) {
  return _.reduce(_.add, 0, xs) / xs.length
} // <- leave be

const averageDollarValue = _.compose(_average, _.map(_.prop("dollar_value")))

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

const _underscore = _.replace(/\W+/g, "_") //<-- leave this alone and use to sanitize

const sanitizeNames = _.compose(
  _.map(_.toLower),
  _.map(_underscore),
  _.map(_.prop("name"))
)

// Bonus 1:
// ============
// Refactor availablePrices with compose.

const availablePrices = _.compose(
  _.join(", "),
  _.map((x) => formatMoney(x.dollar_value)),
  _.filter(_.prop("in_stock"))
)

// Bonus 2:
// ============
// Refactor to pointfree.

const append = _.flip(_.concat)

const fastestCar = _.compose(
  append(" is the fastest"),
  _.prop("name"),
  _.last,
  _.sortBy(_.prop("horsepower"))
)

module.exports = {
  isLastInStock,
  nameOfFirstCar,
  averageDollarValue,
  sanitizeNames,
  availablePrices,
  fastestCar,
}
