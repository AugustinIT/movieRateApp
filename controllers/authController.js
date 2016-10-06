var authController = function() {

	var getIndex = function(req, res) {
		res.redirect('/');
	};

	var getRegister = function(req, res) {
		res.redirect('/', {
			message: req.flash('signUpMessage'),
			csrfToken: req.csrfToken()
		});
	};

	return {
		getIndex: getIndex,
		getRegister: getRegister,
	};

};

module.exports = authController