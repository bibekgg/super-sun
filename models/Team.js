var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Team Model
 * ==========
 */

var Team = new keystone.List('Team', {
    map: { name: 'name' },
    autokey: { path: 'slug', from: 'name', unique: true },
});

Team.add({
    name: { type: String, required: true },
    position: { type: String, require: true },
    image: { type: Types.CloudinaryImage },
    sort: { type: Number, require: true },
    description: { type: Types.Markdown },
    socialLinks: {
        facebook: { type: Types.Url },
        twitter: { type: Types.Url },
        instagram: { type: Types.Url }
    }
});

Team.defaultColumns = 'name, position';

Team.register();
