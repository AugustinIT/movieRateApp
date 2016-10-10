var express = require('express'),
	searchRoute = express.Router(),
	Movie = require('../models/Movie.model.js');

searchRoute.route('/').get(function(req, res) {
	var regex = new RegExp(req.query.searchBox, 'i');

	Movie.find({
		title: {
			'$regex': regex
		}
	}, function(err, results) {
		if(err) throw err;
		res.json(results);
	});
});

module.exports = searchRoute;