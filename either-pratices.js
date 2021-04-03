const _ = require("ramda")

// Definitions
// ====================
const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  toString: () => `Right(${x})`,
})

const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  toString: () => `Left(${x})`,
})

const fromNullable = (x) => (x != null ? Right(x) : Left(null))

const tryCatch = (f) => {
  try {
    return Right(f())
  } catch (e) {
    return Left(e)
  }
}

const logIt = (x) => {
  console.log(x)
  return x
}

const DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i

// Exercise: Either
// Goal: Refactor each example using Either
// Bonus: no curlies
// =========================

// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const street = (user) =>
  fromNullable(user.address)
    .map((address) => address.street)
    .fold(
      () => "no street",
      (x) => x
    )

const streetName = (user) =>
  fromNullable(user.address)
    .chain((address) => fromNullable(address.street))
    .map((street) => street.name)
    .fold(
      () => "no street",
      (x) => x
    )

const parseDbUrl = (cfg) =>
  Right(cfg)
    .chain((cfg) => tryCatch(() => JSON.parse(cfg)))
    .map((c) => c.url.match(DB_REGEX))
    .fold(
      () => null,
      (x) => x
    )

// Ex3: Using Either and the functions above, refactor startApp
// =========================
const startApp = (cfg) =>
  Right(cfg)
    .chain((cfg) => fromNullable(parseDbUrl(cfg)))
    .map(([_, user, password, db]) => `starting ${db}, ${user}, ${password}`)
    .fold(
      (x) => "can't get config",
      (x) => x
    )

module.exports = {
  street,
  streetName,
  parseDbUrl,
  startApp,
}
