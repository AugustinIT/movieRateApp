var express = require('express'),
	session = require('express-session'),
	handlebars = require('express-handlebars'),
	helmet = require('helmet'),
	csrf = require('csurf'),
	flash = require('connect-flash'),
	passport = require('passport'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	db = require('./config/db');

// Initializing app
var app = express(),
	port = process.env.PORT || 3000;

// Setting up the view engine
app.engine('.hbs', handlebars({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

//Connecting to the database
mongoose.connect(db);

// Including the routes
var homeRoute = require('./routes/homeRoute'),
	movieRoute = require('./routes/movieRoute'),
	authRoute = require('./routes/authRoute'),
	userRoute = require('./routes/userRoute'),
	adminRoute = require('./routes/adminRoute'),
	searchRoute = require('./routes/searchRoute'),
	ratingRoute = require('./routes/ratingRoute');

// Settups/Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Ignoring CSRF check
app.use('/rating', ratingRoute);

// Settups/Middleware
app.use(session({
	secret: "movieRateApp",
	resave: true,
	saveUninitialized: true,
	cookie: {
		httpOnly: true
	}
}));
app.use(csrf());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
require('./config/passport')(passport);

// Routes
app.use('/', homeRoute);
app.use('/movie', movieRoute);
app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/search', searchRoute);

// Starting the server
app.listen(port, function() {
	console.log('Starting server...');
	console.log('-------------------------');
	console.log('Listening on port: ' + port);
});