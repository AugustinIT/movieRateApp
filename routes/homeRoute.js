var express = require('express'),
	homeRoute = express.Router();

homeRoute.route('/').get(function(req, res) {
	res.render('index');
});

module.exports = homeRoute;