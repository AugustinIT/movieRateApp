var express = require('express'),
	userRoute = express.Router(),
	userController = require('../controllers/userController')();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}

userRoute.route('/').get(isLoggedIn, userController.getIndex);

module.exports = userRoute;