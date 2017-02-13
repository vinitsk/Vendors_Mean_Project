var mongoose=require('mongoose');


var ProductSchema=new mongoose.Schema({
        externalItemId: String,
        title: String,
        name: String,
        manufacturer: String,
        description: String,
        categories: [String],
        price: {
            value: String,
            currency: String
        },
        discount: Number,
        providerId: String,
        catalogId: String,
        merchantId: String,
        imageUrl: String,
        providerUrl: String,
        subCategory: {
            code: String,
            name: String
        }
    });



mongoose.model('Product',ProductSchema);