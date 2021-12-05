import { IBaseFilter } from '@shared/interfaces';
export interface IProducts {
    id?: string;
    isActive: boolean;
    name: string;
    stock: number;
    description: string;
    specification?: string;
    slug?: string;
    isAvailable: boolean;
    isFeatured: boolean;
    isPopular: boolean;
    mrp: string;
    images?: any; 
    brand?: string;
    department?: string;
  }


export interface IProductsFilter extends IBaseFilter {
  relations?: ['images', 'brand', 'department'];
}

export interface IProductFilter extends IBaseFilter {
  id: string,
  relations?: ['images', 'brand', 'department'];
}


export interface IUpdateProduct extends IProducts {
  brand?: any;
  department?: any;
}
