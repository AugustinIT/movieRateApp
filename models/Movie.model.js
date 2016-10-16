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
	img: String,
	ratingNumber: {
		type: Number,
		default: 0
	},
	ratings: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('Movie', MovieSchema);