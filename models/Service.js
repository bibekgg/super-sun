var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Service Model
 * ==========
 */

var Service = new keystone.List('Service', {
    map: { name: 'name' },
	autokey: { path: 'slug', from: 'name', unique: true },
});

Service.add({
    name: { type: String, required: true },
	description: { type: String },
    image: { type: Types.CloudinaryImage },
	author: { type: Types.Relationship, ref: 'User', index: true },
});

Service.defaultColumns = 'name, description';

Service.register();
