const {
  moneyToFloat,
  percentToFloat,
  applyDiscount,
} = require("./functor-exercises")

it("Should parse a string to float", () => {
  expect(moneyToFloat("$5.00")).toBe(5)
})

it("Should parse percent string to float", () => {
  expect(percentToFloat("20%")).toBe(0.2)
})

it("Should apply the discount", () => {
  expect(applyDiscount("$5.00", "20%")).toBe(4)
})
