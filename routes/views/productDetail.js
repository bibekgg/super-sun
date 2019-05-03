var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'productDetail';
	locals.filters = {
		product: req.params.product,
	};
	locals.data = {
	};

	// Load the current post
	view.on('init', function (next) {

		var q = keystone.list('Product').model.findOne({
			state: 'published',
			slug: locals.filters.product,
		});

		q.exec(function (err, result) {
			locals.data.product = result;
			next(err);
		});

	});

	// Render the view
	view.render('productDetail');
};
