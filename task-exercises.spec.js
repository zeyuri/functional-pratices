/**
 * @jest-environment jsdom
 */
const { postTitle, commentsForPost, getHref } = require("./task-exercises")

global.window = Object.create(window)

describe("task exercices", () => {
  beforeAll(() => {
    delete window.location

    window.location = {
      href: '"https://cdpn.io/drboolean/fullpage/zYYPmZO"',
    }
  })

  it("should run the task and upperCase the title", (done) => {
    postTitle(1).fork(
      () => done(),
      (t) => {
        expect(t).toBe("FIRST")
        done()
      }
    )
  })

  it("should get the posts, then the comments of the post and assign the comments to the post", (done) => {
    commentsForPost(2).fork(
      () => done(),
      (t) => {
        expect(t.title).toBe("Second")
        expect(t.comments).toEqual([{ id: 2, body: "Unforgivable" }])
        done()
      }
    )
  })

  it("should return the href", (done) => {
    getHref().fork(console.error, (t) => {
      expect(Boolean(t.match("cdpn.io"))).toBeTruthy()
      done()
    })
  })
})
