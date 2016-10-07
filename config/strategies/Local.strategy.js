var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, User) {

	// REGISTER STRATEGY HERE

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, username, password, done) {
		process.nextTick(function() {

			User.findOne({'username': username}, function(err, user) {
				if(err) return done(err);
				if(user)  {
					return done(null, false, req.flash('messageFlash', "This user already exists in the databse!"));
				} else {
					var newUser = new User();
					newUser.username = username;
					newUser.password = password;
					newUser.email = req.body.email;

					newUser.save(function(err) {
						if(err) throw err;
						return done(null, user);
					});
				}

			});
		});
	}));

	// LOGIN STRATEGY HERE
	passport.use('local-login', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, username, password, done) {
		process.nextTick(function() {

			User.findOne({'username': username}, function(err, user) {
				if(err) return done(err);
				if(!user) return done(null, false, req.flash('messageFlash', 'Invalid username!'));
				if(user.password !== password) return done(null, false, req.flash('messageFlash', 'Invalid password'));
				return done(null, user);
			});

		});
	}));

};