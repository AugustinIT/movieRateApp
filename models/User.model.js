var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	email: String,
	password: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', userSchema);