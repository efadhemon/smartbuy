const Product = require("./product.model");

module.exports.createProduct = async function (product) {
    return Product.create(product);
};

module.exports.getProducts = async function () {
    return Product.find({});
};

module.exports.getProductById = async function (productId) {
    return Product.findById(productId);
};

module.exports.updateProductById = async function (productId, update) {
    return Product.findByIdAndUpdate(productId, update, { new: true });
};

module.exports.deleteProductById = async function (productId) {
    return Product.findByIdAndDelete(productId);
};
