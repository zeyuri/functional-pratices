const {
  isLastInStock,
  nameOfFirstCar,
  averageDollarValue,
  sanitizeNames,
  availablePrices,
  fastestCar,
} = require("./compose-exercises")

const CARS = [
  { name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true },
  {
    name: "Spyker C12 Zagato",
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
  },
  {
    name: "Jaguar XKR-S",
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
  },
  { name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false },
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: "Pagani Huayra",
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
  },
]

it("should return false when the last car in the array is not in stock", () => {
  expect(isLastInStock(CARS)).toBe(false)
})

it("should return the name of the first car", () => {
  expect(nameOfFirstCar(CARS)).toBe("Ferrari FF")
})

it("should return the avarega dolar vallue of the cars", () => {
  expect(averageDollarValue(CARS)).toBe(790700)
})

it("should sanitize names", () => {
  expect(sanitizeNames(CARS)).toEqual([
    "ferrari_ff",
    "spyker_c12_zagato",
    "jaguar_xkr_s",
    "audi_r8",
    "aston_martin_one_77",
    "pagani_huayra",
  ])
})

it("should return the prices of the cars in stock", () => {
  expect(availablePrices(CARS)).toBe("$700,000.00, $1,850,000.00")
})

it("should return the fastest car", () => {
  expect(fastestCar(CARS)).toBe("Aston Martin One-77 is the fastest")
})
