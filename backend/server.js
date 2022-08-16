const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors =  require('cors')
const app = express()
const port = 8000

// Express Data

const moviedata = require('./routes/movieRoutes')

// Mongo Connection

mongoose.connect('mongodb+srv://root:chP5jcudOasKzof0@cluster0.lx86um7.mongodb.net/mflix?retryWrites=true&w=majority')
.then((x)=>{
    console.log(`Connected to Mongo Database: "${x.connections[0].name}"`)
}).catch((err)=>{
    console.log('Error connecting to mongoose.mongo',err)
})

// Middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

app.use('/mflix',moviedata)

// Staus Listen

app.listen(port, () => console.log('Server is Runing'))