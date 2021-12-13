import { Request, Response } from "express";
import { responseData } from "../../shared/utils/responseData";
import categoryService from "./category.service";

const categoryController = {
    create: async (req: Request, res: Response) => {
        const newCategory = await categoryService.create(req.body);
        return res.status(200).send(responseData(newCategory, req));
    },
    get: async (req: Request, res: Response) => {
        const categories = await categoryService.get();
        return res.send(responseData(categories, req));
    },
    getById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const category = await categoryService.getById(id);
        return res.send(responseData(category, req));
    },
    updateById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const updatedCategory = await categoryService.updateById(id, req.body);
        return res.send(responseData(updatedCategory, req));
    },
    deleteById: async (req: Request, res: Response) => {
        const id = req.params.id;
        const deletedCategory = await categoryService.deleteById(id);
        return res.send(responseData(deletedCategory, req));
    },
};

export default categoryController;
