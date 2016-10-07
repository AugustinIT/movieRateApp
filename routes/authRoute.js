var express = require('express'),
	authRoute = express.Router(),
	authController = require('../controllers/authController')(),
	passport = require('passport');

authRoute.route('/').get(authController.getBack);
authRoute.route('/logout').get(authController.logout);
authRoute.route('/register')
		 .get(authController.getBack)
		 .post(passport.authenticate('local-signup', {
		 	successRedirect: '/',
		 	failureRedirect: '/',
		 	failureFlash: true
		 }));

authRoute.route('/signin')
		 .get(authController.getBack)
		 .post(passport.authenticate('local-login', {
		 	successRedirect: '/user',
		 	failureRedirect: '/',
		 	failureFlash: true
		 }));

module.exports = authRoute;