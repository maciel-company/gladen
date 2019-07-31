var keystone = require('keystone');
var Types = keystone.Field.Types;

// Objeto Producto
var Product=new keystone.List('Product',{
      autokey: { path: 'slug', from: 'name', unique: true },
      map: {name:'name'},
    });

    
var storage = new keystone.Storage({
        adapter: keystone.Storage.Adapters.FS,
        fs: {
            path: keystone.expandPath('./public/uploads/files'), // required; path where the files should be stored
              publicPath: '/public/uploads/files', // path where files will be served
        }
    });


Product.add({
	name: { type: String, required: true, index: true },
	description: { type: Types.Html, wysiwyg:true, height: 300 },
    heroImage:{type: Types.CloudinaryImage},
    images:{type:Types.CloudinaryImages },
    publilshedDate: { type:Date, default:Date.now},
    tipos: { type: Types.Relationship, ref: 'ProductType'},
    linea: { type: Types.Relationship, ref: 'Categoria'},
    marca:{ type: Types.Relationship, ref: 'Owner'},
    pdfInstall:{ type:Types.File, storage: storage },
    
  
    
});
/**
 * Guardar un producto
 */
Product.register();
