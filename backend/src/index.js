const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

//app config
const app = express()

//middlware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json())

const userRoutes = require("./user/user.router");
const postRoutes = require("./post/post.router");

app.use('/api', userRoutes)
app.use('/api', postRoutes)

const server = app.listen(8000, () =>
  console.log(`🚀 Server ready at: http://localhost:8000`),
)
