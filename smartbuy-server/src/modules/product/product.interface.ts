import { Document } from "mongoose";
import ICategory from "../category/category.interface";

export default interface IProduct extends Document {
    name: string;
    price: string;
    brand: string;
    category: ICategory;
    code: string;
    description: string;
    specification: string;
    isAvailable: boolean;
    isPopular: boolean;
}
