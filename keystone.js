// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Super Sun',
	'brand': 'super sun',

	'stylus': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',
	'wysiwyg cloudinary images': true,
	'wysiwyg additional buttons': 'preview',
	'wysiwyg additional plugins': 'preview',
	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
		runtimeOptions: {
			allowProtoPropertiesByDefault: true,
			allowProtoMethodsByDefault: true
		}
	}).engine,
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	// port: 8080
});

keystone.set('cloudinary secure', true);
keystone.set('baseUrl', 'https://www.supersun.com.np/');
// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	banner: 'Banner',
	users: 'users',
	posts: ['posts', 'post-categories'],
	galleries: 'galleries',
	client: "Client",
	testimonial: "Testimonial",
	service: "Service",
	team: "Team",
	product: "Product",
	enquiries: 'enquiries'
});

// Start Keystone to connect to your database and initialise the web server



keystone.start();
