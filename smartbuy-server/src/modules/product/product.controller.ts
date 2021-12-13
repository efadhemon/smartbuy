import { Request, Response } from "express";
import { responseData } from "../../shared/utils/responseData";
import productService from "./product.service";

const productController = {
    create: async (req: Request, res: Response) => {
        const newProduct = await productService.create(req.body);
        return res.status(200).send(responseData(newProduct, req));
    },
    get: async (req: Request, res: Response) => {
        const products = await productService.get();
        return res.send(responseData(products, req));
    },
    getById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const product = await productService.getById(id);
        return res.send(responseData(product, req));
    },
    updateById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const updatedProduct = await productService.updateById(id, req.body);
        return res.send(responseData(updatedProduct, req));
    },
    deleteById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const deletedProduct = await productService.deleteById(id);
        return res.send(responseData(deletedProduct, req));
    },
};

export default productController;
