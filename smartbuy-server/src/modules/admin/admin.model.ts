import mongoose from "mongoose";
import IAdmin from "./admin.interface";
const { Schema } = mongoose;

const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: false,
        },
        image: {
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Admin = mongoose.model<IAdmin>("Admin", adminSchema);
export default Admin;
