var keystone = require('keystone');
var Types = keystone.Field.Types;


// Objeto Owner
var Owner=new keystone.List('Owner',{
      autokey: { path: 'slug', from: 'name', unique: true },
      map: {name:'name'},
    });

Owner.add({
	name: { type: String, required: true},
    heroImage:{type: Types.CloudinaryImage},
    orden:{type: Number},
    });

Owner.relationship({ ref: 'Product', path: 'product', refPath: 'owner' })
/**
 * Guardar un Owner
 * 
 */
Owner.register();


