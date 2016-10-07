var express = require('express'),
	adminRoute = express.Router(),
	adminController = require('../controllers/adminController')();

adminRoute.route('/').get(adminController.getIndex);

module.exports = adminRoute;