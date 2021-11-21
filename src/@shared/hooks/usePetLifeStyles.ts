import { IBasePetFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"
import { PetLifeStylesService } from "@shared/services"

type IProps = {
    options?: IBasePetFilter
    config?: QueryConfig<typeof PetLifeStylesService.filter>
}
export const usePetLifeStyles = ({ options = {}, config = {} }: IProps) => {
    const KEY = `${PetLifeStylesService.NAME}${PetLifeStylesService.getById.name}`
    return useQuery({
        ...config,
        queryKey: [KEY, options],
        queryFn: () => PetLifeStylesService.filter(options),
    })
}
