import IProduct from "./product.interface";
import Product from "./product.model";

const createProduct = async (product: IProduct) => {
    return Product.create(product);
};

const getProducts = async () => {
    return Product.find({});
};

const getProductById = async (productId: string) => {
    return Product.findById(productId);
};

const updateProductById = async (productId: string, update: any) => {
    return Product.findByIdAndUpdate(productId, update, { new: true });
};

const deleteProductById = async (productId: string) => {
    return Product.findByIdAndDelete(productId);
};

const productService = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};

export default productService;
