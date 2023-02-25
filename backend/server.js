const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//app config
const app = express()

//middlware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Configure Mongo
const db = "mongodb://127.0.0.1/Template";

// Connect to Mongo with Mongoose
mongoose.connect(db,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log("Mongo connected"))
  .catch(err => console.log(err));

const generalRoutes = require("./routes/general");
app.use('/api', generalRoutes)

//   //set static folder
//   app.use(express.static('frontend/build'));
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   });

//listen
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
