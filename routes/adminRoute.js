var express = require('express'),
	adminRoute = express.Router(),
	adminController = require('../controllers/adminController')();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
}

adminRoute.route('/').get(adminController.getIndex);
adminRoute.route('/profile').get(isLoggedIn, adminController.getProfile);
adminRoute.route('/add')
		  .get(isLoggedIn, adminController.getAdd)
		  .post(isLoggedIn, adminController.postAdd);

module.exports = adminRoute;