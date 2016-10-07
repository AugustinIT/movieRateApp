var userController = function() {

	var getIndex = function(req, res) {
		if(req.user.admin === true) return res.redirect('/admin/profile');

		res.render('user/index', {
			user: req.user
		});
	};

	return {
		getIndex: getIndex
	}

};

module.exports = userController;