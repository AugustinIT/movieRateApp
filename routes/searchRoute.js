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
		var data = [];
		for(var i = 0; i < results.length; i++) {
			data.push(results[i].title);
		}
		console.log(JSON.stringify(data));
		res.end(JSON.stringify(data));
	});
});

module.exports = searchRoute;