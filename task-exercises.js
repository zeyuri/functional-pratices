const Task = require("data.task")
const posts = { 1: { title: "First" }, 2: { title: "Second" } }

const comments = {
  First: [{ id: 1, body: "Brilliant!" }],
  Second: [{ id: 2, body: "Unforgivable" }],
}

const getPost = (id) =>
  new Task((rej, res) =>
    setTimeout(() => (posts[id] ? res(posts[id]) : rej("not found")), 200)
  )

const getComments = (post) =>
  new Task((rej, res) => setTimeout(() => res(comments[post.title]), 200))

// Ex1: Use the result of getPost() and upperCase the title. Posts and comments are defined above and look like {title: String} and {id: Int, body: String} respectively.
// =========================
const postTitle = (id) => getPost(id).map((post) => post.title.toUpperCase())

// Ex2: pass in the post to getComments(), defined above, then assign the returned comments to the post
// =========================
const commentsForPost = (id) =>
  getPost(id).chain((post) =>
    getComments(post).map((comments) => Object.assign({ comments }, post))
  )

// Ex3: Wrap location.href in a Task to make it "pure"
// =========================
const getHref = () =>
  new Task((rej, res) =>
    location !== null ? res(location.href) : rej("location is null")
  )

module.exports = {
  postTitle,
  commentsForPost,
  getHref,
}
