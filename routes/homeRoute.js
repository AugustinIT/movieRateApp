var express = require('express'),
	homeRoute = express.Router(),
	homeController = require('../controllers/homeController')();

homeRoute.route('/').get(homeController.getIndex);

module.exports = homeRoute;