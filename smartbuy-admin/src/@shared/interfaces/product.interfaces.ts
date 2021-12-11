import { ICategory } from "./category.interfaces";

export interface IProduct {
    _id: string;
    name: string;
    price: string;
    images: any;
    brand: string;
    category: ICategory;
    code: string;
    isAvailable: boolean;
    isPopular: boolean;
    description: string;
    specification?: string;
}

export interface ICreateProduct {
    name: string;
    price: string;
    images: any;
    brand: string;
    category: ICategory;
    code: string;
    isAvailable: boolean;
    isPopular: boolean;
    description: string;
    specification?: string;
}

export interface IUpdateProduct {
    id?: string;
    name: string;
    price: string;
    images: any;
    brand: string;
    category: ICategory;
    code: string;
    isAvailable: boolean;
    isPopular: boolean;
    description: string;
    specification?: string;
}
