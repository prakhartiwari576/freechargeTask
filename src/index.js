const express = require('express')
require('./db/mongoose')
const userRouter = require('./router/user')
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const csvRouter = require('./router/upload');

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(csvRouter);
app.use(userRouter)

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`)
})

