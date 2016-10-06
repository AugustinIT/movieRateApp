var authController = function() {

	var getIndex = function(req, res) {
		res.redirect('/');
	};

	var getRegister = function(req, res) {
		res.redirect('/');
	};

	return {
		getIndex: getIndex,
		getRegister: getRegister
	};

};

module.exports = authController