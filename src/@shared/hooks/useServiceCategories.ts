import { IBaseFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { ServiceCategoryService } from "@shared/services"
import { useQuery } from "react-query"

type IProps = {
    options?: IBaseFilter
    config?: QueryConfig<typeof ServiceCategoryService.filter>
}
export const useServiceCategories = ({ options = {}, config = {} }: IProps) => {
    const KEY = `${ServiceCategoryService.NAME}${ServiceCategoryService.getById.name}`
    return useQuery({
        ...config,
        queryKey: [KEY, options],
        queryFn: () => ServiceCategoryService.filter(options),
    })
}
