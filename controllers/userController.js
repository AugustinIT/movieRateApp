var Review = require('../models/Review.model');

var userController = function() {

	var getIndex = function(req, res) {
		if(req.user.admin === true) return res.redirect('/admin/profile');

		Review.find({userName: req.user.username}, function(err, reviews) {
			if(err) throw err;
			
			res.render('user/index', {
				user: req.user,
				reviews: reviews
			});
		});
	};

	return {
		getIndex: getIndex
	}

};

module.exports = userController;