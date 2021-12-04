const { responseData } = require("../../utils/responseData");
const categoryService = require("./category.service");

module.exports.createCategory = async function (req, res) {
    const newCategory = await categoryService.createCategory(req.body);
    return res.status(200).send(responseData(newCategory));
};

module.exports.getCategories = async function (req, res) {
    const categories = await categoryService.getCategories();
    return res.send(responseData(categories, req.query.page, req.query.take));
};

module.exports.getCategoryById = async function (req, res) {
    const categoryId = req.params.id;
    const category = await categoryService.getCategoryById(categoryId);
    return res.send(responseData(category));
};

module.exports.updateCategoryById = async function (req, res) {
    const categoryId = req.params.id;
    const update = req.body;
    const Category = await categoryService.updateCategoryById(categoryId, update);
    return res.send(responseData(Category));
};
module.exports.deleteCategoryById = async function (req, res) {
    const categoryId = req.params.id;
    const category = await categoryService.deleteCategoryById(categoryId);
    return res.send(responseData(category));
};
