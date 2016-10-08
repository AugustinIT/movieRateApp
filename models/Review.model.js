var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ReviewSchema = new Schema({
	review: {
		type: String,
		required: true
	},
	userName: {
		type: String,
		required: true
	},
	movieId: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Review', ReviewSchema);