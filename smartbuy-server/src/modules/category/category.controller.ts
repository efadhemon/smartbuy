import { Request, Response } from "express";
import { responseData } from "../../shared/utils/responseData";
import categoryService from "./category.service";

const createCategory = async (req: Request, res: Response) => {
    const newCategory = await categoryService.createCategory(req.body);
    return res.status(200).send(responseData(newCategory, req));
};

const getCategories = async (req: Request, res: Response) => {
    const categories = await categoryService.getCategories();
    return res.send(responseData(categories, req));
};

const getCategoryById = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const category = await categoryService.getCategoryById(categoryId);
    return res.send(responseData(category, req));
};

const updateCategoryById = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const update = req.body;

    const updatedCategory = await categoryService.updateCategoryById(
        categoryId,
        update
    );
    return res.send(responseData(updatedCategory, req));
};
const deleteCategoryById = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const deletedCategory = await categoryService.deleteCategoryById(
        categoryId
    );
    return res.send(responseData(deletedCategory, req));
};

const categoryController = {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
};

export default categoryController;
