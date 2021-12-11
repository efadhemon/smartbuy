export interface IAdmin {
    _id: string;
    name: string;
    image: string;
    phone: string;
    email: string;
    gender: string;
    address: string;
}
export interface IUpdateAdmin {
    id?: string;
    name?: string;
    image?: string;
    email?: string;
    phone?: string;
    gender?: string;
    address?: string;
}

export interface ICreateAdmin {
    name: string;
    image: string;
    phone: string;
    email: string;
    password: string;
    gender: string;
    address: string;
}
