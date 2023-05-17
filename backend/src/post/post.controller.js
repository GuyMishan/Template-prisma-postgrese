const prisma = require('../prismaclient'); // Import the Prisma client

exports.posts = async (req, res) => {
  const post = await prisma.post.findMany()
  res.json(post)
}

exports.postbyid = async (req, res) => {
  const { id } = req.params

  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  })
  res.json(post)
}

exports.createpost = async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
}

exports.deletepost = async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
}