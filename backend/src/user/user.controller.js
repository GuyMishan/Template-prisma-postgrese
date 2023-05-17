const prisma = require('../prismaclient'); // Import the Prisma client

exports.users = async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
}

exports.signup = async (req, res) => {
  const { name, email, posts } = req.body
  
  const postData = posts
    ? posts.map((post) => {
        return { title: post.title, content: post.content || undefined }
      })
    : []

  const result = await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: postData,
      },
    },
  })
  res.json(result)
}