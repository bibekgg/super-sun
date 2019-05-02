var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * ==========
 */

var Testimonial = new keystone.List('Testimonial', {
    map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Testimonial.add({
    name: { type: String, required: true },
	company: { type: String },
    image: { type: Types.CloudinaryImage },
    postedDate: { type: Types.Date, default: Date.now },
	author: { type: Types.Relationship, ref: 'User', index: true },
	message: { type: Types.Html, wysiwyg: true, height: 150 },        
});

Testimonial.defaultColumns = 'name, company|20%, postedDate|20%';

Testimonial.register();
