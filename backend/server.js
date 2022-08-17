const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require("cookie-parser");
const app = express()
const port = 8000

// Staus Listen

app.listen(port, () => console.log('Server is Runing'))

// Express Data

const moviedata = require('./routes/movieRoutes')
const authRoutes = require('./routes/authRoutes')

// Mongo Connection

mongoose
  .connect("mongodb+srv://root:chP5jcudOasKzof0@cluster0.lx86um7.mongodb.net/mflix?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE",],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoutes);
app.use('/mflix', moviedata)
