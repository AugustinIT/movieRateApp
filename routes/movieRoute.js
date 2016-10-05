var express = require('express'),
	movieRoute = express.Router(),
	movieController = require('../controllers/movieController')();

movieRoute.route('/').get(function(req, res) {
	res.redirect('/');
});
movieRoute.route('/:id').get(movieController.getIndex);

module.exports = movieRoute;