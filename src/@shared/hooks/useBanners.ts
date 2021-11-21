import { BannerService } from "@shared/services"
import { IBannerFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"

type IProps = {
	options?: IBannerFilter
	config?: QueryConfig<typeof BannerService.filter>
}
export const useBanners = ({ options = {}, config = {} }: IProps) => {
	const KEY = `${BannerService.NAME}${BannerService.getById.name}`
	return useQuery({
		...config,
		queryKey: [KEY, options],
		queryFn: () => BannerService.filter(options),
	})
}
