var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.data = {
		services: [],
		testimonials: [],
		clients: [],
	};

	/**
	 * Get all services.
	 */
	view.on('init', function (next) {

		keystone.list('Service').model.find().exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}
			locals.data.services = results;
			next();
		});
	});

	/**
	 * Get all testimonials.
	 */
	view.on('init', function (next) {

		keystone.list('Testimonial').model.find().sort('postedDate').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}
			locals.data.testimonials = results;
			next();
		});
	});


	/**
	 * Get all clients.
	 */
	view.on('init', function (next) {

		keystone.list('Client').model.find().exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}
			locals.data.clients = results;
			next();
		});
	});

	// Render the view
	view.render('index');
};
