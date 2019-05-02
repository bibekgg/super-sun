var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Client Model
 * ==========
 */

var Client = new keystone.List('Client', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Client.add({
	title: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	image: { type: Types.CloudinaryImage },
});

Client.defaultColumns = 'title, author|20%';

Client.register();
