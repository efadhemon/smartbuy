import IProduct from "./product.interface";

import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        price: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: false,
        },
        reviews: {
            type: Array,
            required: false,
        },
        code: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        specification: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Product = mongoose.model<IProduct>("Product", productSchema);
export default Product;
