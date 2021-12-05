import { Document } from "mongoose";

export default interface IProduct extends Document {
    name: string;
    price: string;
    category: string;
    brand: string;
    rating: number;
    reviews: object[];
    code: string;
    description: string;
    specification: string;
}
