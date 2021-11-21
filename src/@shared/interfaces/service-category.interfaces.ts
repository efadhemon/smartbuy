import { IBaseFilter } from '@shared/interfaces';

export interface IBaseServiceCategoryFilter extends IBaseFilter{
    isActive?: boolean
	category?: string
}


export interface IServiceCategory {
	id: string
	isActive: boolean
    name: string
    description: string
    specification: string
    slug: string
}
