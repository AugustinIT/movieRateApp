var Movie = require('../models/Movie.model');

var homeController = function() {

	var getIndex = function(req, res) {
		Movie.find({})
			 .exec(function(err, results) {
			 	if(err) throw err;
			 	res.render('index', {
			 		results: results,
			 		csrfToken: req.csrfToken(),
			 		message: req.flash('signUpMessage')
			 	});
			 });
	};

	return {
		getIndex: getIndex
	};

};

module.exports = homeController;