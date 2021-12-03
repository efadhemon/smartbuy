import { BrandService } from "@shared/services";
import { IBaseFilter } from "@shared/interfaces";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type BrandsType = {
	options: IBaseFilter
	config?: QueryConfig<typeof BrandService.filter>
}

export const useBrands = ({ options, config }: BrandsType) => {
	const KEY = `${BrandService.NAME}${BrandService.getById.name}`
	return useQuery({
		...config,
		queryKey: [KEY, options],
		queryFn: () => BrandService.filter(options),
	})
}