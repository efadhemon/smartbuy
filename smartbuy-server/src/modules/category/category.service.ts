import ICategory from "./category.interface";
import Category from "./category.model";

const categoryService = {
    create: async (category: ICategory) => {
        return Category.create(category);
    },
    get: async () => {
        return Category.find({});
    },
    getById: async (id: string) => {
        return Category.findById(id);
    },
    updateById: async (id: string, data: any) => {
        return Category.findByIdAndUpdate(id, data, { new: true });
    },
    deleteById: async (id: string) => {
        return Category.findByIdAndDelete(id);
    },
};

export default categoryService;
