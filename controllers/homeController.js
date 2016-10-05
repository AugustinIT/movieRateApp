var mongoose = require('mongoose'),
	db = require('../config/db'),
	Movie = require('../models/Movie.model');

var homeController = function() {

	var getIndex = function(req, res) {
		mongoose.connect(db);
		var conn = mongoose.connection;
		Movie.find({})
			 .exec(function(err, results) {
			 	if(err) throw err;
			 	res.render('index', {
			 		results: results
			 	});
			 	conn.close();
			 });
	};

	return {
		getIndex: getIndex
	};

};

module.exports = homeController;