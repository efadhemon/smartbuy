import { Document } from "mongoose";

export default interface ICategory extends Document {
    name: string;
    image: string;
    isActive: boolean;
}