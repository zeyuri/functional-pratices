//source: https://codepen.io/drboolean/pen/poodxOm?editors=0010

const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  toString: () => `Box(${x})`,
})

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces

// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat = (str) =>
  Box(str)
    .map((str) => str.replace(/\$/, ""))
    .fold(parseFloat)

// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = (str) =>
  Box(str.replace(/\%/, ""))
    .map(parseFloat)
    .fold((float) => float * 0.01)

// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount_ = (price, discount) => {
  const cents = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cents - cents * savings
}

const applyDiscount = (price, discount) =>
  Box(price)
    .map(moneyToFloat)
    .fold((cents) =>
      Box(discount)
        .map(percentToFloat)
        .fold((savings) => cents - cents * savings)
    )

module.exports = {
  moneyToFloat,
  percentToFloat,
  applyDiscount,
}
