var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'teamDetail';
	locals.filters = {
		member: req.params.member,
	};
	locals.data = {
	};

	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Team').model.findOne({
			slug: locals.filters.member,
		});

		q.exec(function (err, result) {
			locals.data.member = result;
			next(err);
		});

	});

	// Render the view
	view.render('teamDetail');
};
