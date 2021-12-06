import { Document } from "mongoose";

export default interface IAdmin extends Document {
    name: string;
    image: string;
    phone: string;
    email: string;
    password: string;
    gender: string;
    address: string;
}
