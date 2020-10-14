var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
	'mongodb+srv://vasujain314:dY1xCgY0WdFpAeRi@cluster0.nauop.mongodb.net/freecharge?retryWrites=true&w=majority',
	{
		useUnifiedTopology : true,
		useNewUrlParser    : true
	}
);
let db = mongoose.connection;

db.once('open', () => logger.info('Connected to the MongoDB database'));

module.exports = {
	mongoose
};