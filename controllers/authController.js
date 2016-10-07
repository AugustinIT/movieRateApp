var authController = function() {

	var getBack = function(req, res) {
		res.redirect('/');
	};

	var logout = function(req, res) {
		req.logout();
		res.redirect('/');
	};

	return {
		getBack: getBack,
		logout: logout
	};

};

module.exports = authController