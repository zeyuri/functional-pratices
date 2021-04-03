const {
  street,
  streetName,
  parseDbUrl,
  startApp,
} = require("./either-pratices")

it("should return the the street or a left", () => {
  const user = { address: { street: { name: "Willow" } } }
  expect(street(user)).toEqual({ name: "Willow" })
  expect(street({})).toBe("no street")
})

it("should return the street name or a left", () => {
  const user = { address: { street: { name: "Willow" } } }
  expect(streetName(user)).toBe("Willow")
  expect(streetName({})).toBe("no street")
  expect(streetName({ address: { street: null } })).toBe("no street")
})

it("should parse the dbUrl or return a null ", () => {
  const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'
  expect(parseDbUrl(config)[1]).toBe("sally")
  expect(parseDbUrl()).toBe(null)
})

it("should start the app or return a error message", () => {
  const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'

  expect(startApp(config)).toBe("starting mydb, sally, muppets")
  expect(startApp()).toBe("can't get config")
})

// QUnit.test("Ex3: startApp", assert => {

//   assert.equal(String(startApp(config)), "starting mydb, sally, muppets")
//   assert.equal(String(startApp()), "can't get config")
//  })
