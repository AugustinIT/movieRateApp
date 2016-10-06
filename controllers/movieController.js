var Movie = require('../models/Movie.model');

var movieController = function() {

	var getIndex = function(req, res) {
		var id = req.params.id;

		Movie.findOne({
			_id: id
		}).exec(function(err, results) {
			if(err) throw err;
			res.render('movie', {
				results: results,
				csrfToken: req.csrfToken()
			});
		});	
	};
	
	return {
		getIndex: getIndex
	}

};

module.exports = movieController;