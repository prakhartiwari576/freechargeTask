const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const csvRouter = require('./router/upload');

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`)
})

