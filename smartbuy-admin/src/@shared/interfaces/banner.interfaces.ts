export interface IBanner {
    _id: string;
    image: string;
    title: string;
    type: string;
    url: string;
}

export interface ICreateBanner {
    image: string;
    title: string;
    type: string;
    url: string;
}

export interface IUpdateBanner {
    id?: string;
    image: string;
    title: string;
    type: string;
    url: string;
}
