import { ProductsService } from "@shared/services";
import { IBaseFilter } from "@shared/interfaces";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type ProductsType = {
	options: IBaseFilter
	config?: QueryConfig<typeof ProductsService.filter>
}

export const useProducts = ({ options, config }: ProductsType) => {
	const KEY = `${ProductsService.NAME}${ProductsService.getById.name}`
	return useQuery({
		...config,
		queryKey: [KEY, options],
		queryFn: () => ProductsService.filter(options),
	})
}