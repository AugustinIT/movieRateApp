var express = require('express'),
	session = require('express-session'),
	handlebars = require('express-handlebars'),
	helmet = require('helmet'),
	csrf = require('csurf'),
	flash = require('connect-flash'),
	passport = require('passport'),
	morgan = require('morgan');

// Initializing app
var app = express(),
	port = process.env.PORT || 3000;

// Setting up the view engine
app.engine('.hbs', handlebars({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

// Including the routes
var homeRoute = require('./routes/homeRoute');
var movieRoute = require('./routes/movieRoute');

// Settups/Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/', homeRoute);
app.use('/movie', movieRoute);

// Starting the server
app.listen(port, function() {
	console.log('Starting server...');
	console.log('-------------------------');
	console.log('Listening on port: ' + port);
});