var express = require('express'),
	movieRoute = express.Router(),
	movieController = require('../controllers/movieController')();

movieRoute.route('/').get(function(req, res) {
	res.redirect('/');
});
movieRoute.route('/:id').get(movieController.getIndex);
movieRoute.route('/addReview')
		  .get(function(req, res) {res.redirect('/')})
		  .post(movieController.postRev);

module.exports = movieRoute;