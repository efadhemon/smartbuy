const { responseData } = require("../../utils/responseData");
const productService = require("./product.service");

module.exports.createProduct = async function (req, res) {
    const user = req.body;
    const newProduct = await productService.createProduct(user);
    return res.status(200).send(responseData(newProduct));
};

module.exports.getProducts = async function (req, res) {
    const products = await productService.getProducts();
    return res.send(responseData(products, req.query.page, req.query.take));
};

module.exports.getProductById = async function (req, res) {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    return res.send(responseData(product));
};

module.exports.updateProductById = async function (req, res) {
    const productId = req.params.id;
    const update = req.body;
    const product = await productService.updateProductById(productId, update);
    return res.send(responseData(product));
};
module.exports.deleteProductById = async function (req, res) {
    const productId = req.params.id;
    const product = await productService.deleteProductById(productId);
    return res.send(responseData(product));
};
