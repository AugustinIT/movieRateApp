var Movie = require('../models/Movie.model');

var adminController = function() {

	var getIndex = function(req, res) {
		if(req.isAuthenticated()) return res.redirect('/admin/profile')
		res.render('admin/index', {
			user: req.user,
			csrfToken: req.csrfToken()
		});
	};

	var getProfile = function(req, res) {
		Movie.find({}, function(err, movies) {
			if(err) throw err;

			res.render('admin/profile', {
				user: req.user,
				movies: movies
			});
		});
	};

	var getAdd = function(req, res) {
		res.render('admin/add', {
			user: req.user,
			csrfToken: req.csrfToken()
		});
	};

	var postAdd = function(req, res) {
		var newMovie = new Movie();
		newMovie.title = req.body.title;
		newMovie.description = req.body.description;
		newMovie.cast = req.body.cast;
		newMovie.img = req.body.image;

		newMovie.save(function(err, movie) {
			if(err) throw err;
			res.redirect('/admin/profile');
		});
	};

	return {
		getIndex: getIndex,
		getProfile: getProfile,
		getAdd: getAdd,
		postAdd: postAdd
	}

};

module.exports = adminController;