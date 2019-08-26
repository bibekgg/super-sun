var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Banner Model
 * ==========
 */

var Banner = new keystone.List('Banner', {
    map: { name: 'title' }
});

Banner.add({
    title: { type: String, required: true },
	description: { type: Types.Textarea },
    image: { type: Types.CloudinaryImage },
});

Banner.defaultColumns = 'title|30%, description';

Banner.register();
