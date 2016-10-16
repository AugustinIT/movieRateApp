var Movie = require('../models/Movie.model'),
	Review = require('../models/Review.model');

var movieController = function() {

	var getIndex = function(req, res) {
		var id = req.params.id;

		Movie.findOne({
			_id: id
		}).exec(function(err, movies) {
			if(err) throw err;

			Review.find({movieId: id}, function(err, reviews) {
				if(err) throw err;
				res.render('movie', {
					results: movies,
					csrfToken: req.csrfToken(),
					user: req.user,
					reviews: reviews,
					avgRating: (movies.ratings / movies.ratingNumber).toFixed(2)
				});
				
			});

		});	
	};

	var postRev = function(req, res) {
		var movieId = req.body.movieId;
		var newReview = new Review({
			review: req.body.review,
			userName: req.user.username,
			movieId: movieId
		});

		newReview.save(function(err, review) {
			if(err) throw err;
			res.redirect('/movie/' + movieId);
		});
	};
	
	return {
		getIndex: getIndex,
		postRev: postRev
	}

};

module.exports = movieController;