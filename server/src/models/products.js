const mongoose = require('mongoose')
const { Schema } = mongoose

// productSchema
const productSchema = new Schema({
    productName: String,    // String is shorthand for {type: String}
    price: Number,
    productDescription: String,
    brand: String,
    availability: String,
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;