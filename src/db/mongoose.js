var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
	process.env.MONGODB_URL,
	{
		useUnifiedTopology : true,
		useNewUrlParser    : true
	}
);
let db = mongoose.connection;

db.once('open', () => console.log('Connected to the MongoDB database'));

module.exports = {
	mongoose
};

