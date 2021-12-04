const Category = require("./category.model");

module.exports.createCategory = async function (category) {
    return Category.create(category);
};

module.exports.getCategories = async function () {
    return Category.find({});
};

module.exports.getCategoryById = async function (categoryId) {
    return Category.findById(categoryId);
};

module.exports.updateCategoryById = async function (categoryId, update) {
    return Category.findByIdAndUpdate(categoryId, update, { new: true });
};

module.exports.deleteCategoryById = async function (categoryId) {
    return Category.findByIdAndDelete(categoryId);
};
