import { IBaseFilter } from '@shared/interfaces';
export interface IBannerFilter extends IBaseFilter {
	type?: string;
}

export interface IBanner {
	id: string
	isActive: boolean
	image: string
	title: string
	type: string
	bannerUrl: string
}
