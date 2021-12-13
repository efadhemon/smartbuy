import IProduct from "./product.interface";
import Product from "./product.model";

const productService = {
    create: async (product: IProduct) => {
        return Product.create(product);
    },
    get: async () => {
        return Product.find({});
    },
    getById: async (id: string) => {
        return Product.findById(id);
    },
    updateById: async (id: string, data: any) => {
        return Product.findByIdAndUpdate(id, data, { new: true });
    },
    deleteById: async (id: string) => {
        return Product.findByIdAndDelete(id);
    },
};

export default productService;
