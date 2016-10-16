var express = require('express'),
	ratingRoute = express.Router(),
	Movie = require('../models/Movie.model');

ratingRoute.route('/')
		   .get(function(req, res) {res.redirect('/');})
		   .post(function(req, res) {
		   		
		   		Movie.findById(req.body.movieId, function(err, result) {
		   			if(err) throw err;

		   			result.ratings = Number(result.ratings) + Number(req.body.ratings);
		   			result.ratingNumber = ++result.ratingNumber;
		   			result.save(function(data) {
		   				res.send(data);
		   			});
		   		});

		   });

module.exports = ratingRoute;