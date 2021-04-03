// Setup
//==============
const _ = require("ramda")
const split = _.curry((delimiter, string) => string.split(delimiter))

// Exercise 1
//==============

const words = split(" ")

// Exercise 1a
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.

const sentences = _.map(words)

// Exercise 2
//==============
const filterQs = _.filter(_.test(/q/gi))

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

const _keepHighest = (x, y) => (x >= y ? x : y) // <- leave be

// TODO: rewrite max in its "simplest" form
const max = _.reduce((acc, x) => _keepHighest(acc, x), 0)

// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)

const slice = _.curry((init, final, xs) => xs.slice(init, final))

// Bonus 2:
// ============
// use slice to define a function take() that takes n elements from an array. make it curried
const take = _.curry(slice(0))

module.exports = {
  words,
  sentences,
  filterQs,
  max,
  slice,
  take,
}
