var mongoose = require('mongoose'),
	db = require('../config/db'),
	Movie = require('../models/Movie.model');

var movieController = function() {

	var getIndex = function(req, res) {
		mongoose.connect(db);
		var conn = mongoose.connection,
			id = req.params.id;

		Movie.findOne({
			_id: id
		}).exec(function(err, results) {
			if(err) throw err;
			res.render('movie', {
				results: results
			});
			conn.close();
		});	
	};
	
	return {
		getIndex: getIndex
	}

};

module.exports = movieController;