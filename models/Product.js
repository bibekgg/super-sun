var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product', {
	map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Product.add({
	name: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: String },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.TextArray },
});

Product.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Product.defaultColumns = 'name, state|20%, categories|20%';
Product.register();
