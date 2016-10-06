var express = require('express'),
	authRoute = express.Router(),
	authController = require('../controllers/authController')(),
	passport = require('passport');

authRoute.route('/').get(authController.getIndex);
authRoute.route('/register')
		 .get(authController.getRegister)
		 .post(passport.authenticate('local-signup', {
		 	successRedirect: '/',
		 	failureRedirect: '/',
		 	failureFlash: true
		 }));

module.exports = authRoute;