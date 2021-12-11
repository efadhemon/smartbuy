import mongoose from "mongoose";
import ICategory from "./category.interface";
const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
);

const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;