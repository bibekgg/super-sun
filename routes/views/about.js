var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';

	locals.data = {
		whatWeDo: [],
		teamMembers: [],
		clients: [],
	};

	/**
	 * Get all teamMembers.
	 */
	view.on('init', function (next) {

		keystone.list('Team').model.find().sort('sort').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}
			locals.data.teamMembers = results;
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
	view.render('about');
};
