var bodyParser = require('body-parser');
const mongoose = require('./db/mongoose');
const jwt = require('jsonwebtoken');
var express = require('express');

const csvRouter = require('./router/upload');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(csvRouter);
app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});