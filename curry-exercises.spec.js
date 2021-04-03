const {
  words,
  sentences,
  filterQs,
  max,
  slice,
  take,
} = require("./curry-exercises")

it("Should split the string", () => {
  expect(words("Jingle bells Batman smells")).toEqual([
    "Jingle",
    "bells",
    "Batman",
    "smells",
  ])
})

it("Should create a array of sentences", () => {
  expect(
    sentences(["Jingle bells Batman smells", "Robin laid an egg"])
  ).toEqual([
    ["Jingle", "bells", "Batman", "smells"],
    ["Robin", "laid", "an", "egg"],
  ])
})

it("Should filter the strings that start with q", () => {
  expect(filterQs(["quick", "camels", "quarry", "over", "quails"])).toEqual([
    "quick",
    "quarry",
    "quails",
  ])
})

it("Should return the biggest number", () => {
  expect(max([323, 523, 554, 123, 5234])).toBe(5234)
})

it("Should slice the array lazyly", () => {
  expect(slice(1)(3)(["a", "b", "c"])).toEqual(["b", "c"])
})

it("Should slice take the first two values of the given array", () => {
  expect(take(2)(["a", "b", "c"])).toEqual(["a", "b"])
})
