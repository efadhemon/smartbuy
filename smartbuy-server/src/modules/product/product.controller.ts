import { Request, Response } from "express";
import { responseData } from "../../shared/utils/responseData";
import productService from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    const newProduct = await productService.createProduct(req.body);
    return res.status(200).send(responseData(newProduct));
};

const getProducts = async (req: Request, res: Response) => {
    const products = await productService.getProducts();
    return res.send(responseData(products, req.query.page, req.query.take));
};

const getProductById = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    return res.send(responseData(product));
};

const updateProductById = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const update = req.body;
    const product = await productService.updateProductById(productId, update);
    return res.send(responseData(product));
};
const deleteProductById = async (req: Request, res: Response) => {
    const productId = req.params.id;
    const product = await productService.deleteProductById(productId);
    return res.send(responseData(product));
};

const productController = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};

export default productController;
