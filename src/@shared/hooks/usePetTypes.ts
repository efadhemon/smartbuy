import { IBasePetFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"
import { PetTypeService } from "@shared/services"

type IProps = {
    options?: IBasePetFilter
    config?: QueryConfig<typeof PetTypeService.filter>
}
export const usePetTypes = ({ options = {}, config = {} }: IProps) => {
    const KEY = `${PetTypeService.NAME}${PetTypeService.getById.name}`
    return useQuery({
        ...config,
        queryKey: [KEY, options],
        queryFn: () => PetTypeService.filter(options),
    })
}
