import { IBaseFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { ServicesService } from "@shared/services"
import { useQuery } from "react-query"

type IProps = {
    id: string;
    config?: QueryConfig<typeof ServicesService.assignPackages>
}
export const useServicePackages = ({ id , config = {} }: IProps) => {
    const KEY = `${ServicesService.NAME}${ServicesService.assignPackages.name}`
    return useQuery({
        ...config,
        queryKey: [KEY],
        queryFn: () => ServicesService.assignPackages(id),
    })
}
