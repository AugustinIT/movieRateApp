var adminController = function() {

	var getIndex = function(req, res) {
		res.render('admin/index', {
			user: req.user,
			csrfToken: req.csrfToken()
		});
	};

	return {
		getIndex: getIndex
	}

};

module.exports = adminController;