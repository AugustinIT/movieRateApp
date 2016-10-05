var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MovieSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	cast: String,
	img: String
});

module.exports = mongoose.model('Movie', MovieSchema);