import { IBaseServiceCategoryFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { ServicesService } from "@shared/services"
import { useQuery } from "react-query"

type IProps = {
    options?: IBaseServiceCategoryFilter
    config?: QueryConfig<typeof ServicesService.filter>
}
export const useServices = ({ options = {}, config = {} }: IProps) => {
    const KEY = `${ServicesService.NAME}${ServicesService.getById.name}`
    return useQuery({
        ...config,
        queryKey: [KEY, options],
        queryFn: () => ServicesService.filter(options),
    })
}
