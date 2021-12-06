import ICategory from "./category.interface";
import Category from "./category.model";

const createCategory = async (category: ICategory) => {
    return Category.create(category);
};

const getCategories = async () => {
    return Category.find({});
};

const getCategoryById = async (categoryId: string) => {
    return Category.findById(categoryId);
};

const updateCategoryById = async (categoryId: string, update: any) => {
    return Category.findByIdAndUpdate(categoryId, update, { new: true });
};

const deleteCategoryById = async (categoryId: string) => {
    return Category.findByIdAndDelete(categoryId);
};

const categoryService = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
};

export default categoryService;
