export interface ICategory {
    _id: string;
    name: string;
    image: string;
    isActive: boolean;
}

export interface ICreateCategory {
    name: string;
    image: string;
    isActive: string;
}

export interface IUpdateCategory {
    id?: string;
    name: string;
    image: string;
    isActive: string;
}
