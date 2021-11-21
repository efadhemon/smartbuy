import { IBasePetFilter } from "@shared/interfaces"
import { QueryConfig } from "@shared/config"
import { useQuery } from "react-query"
import { PetBreedsService } from "@shared/services"

type IProps = {
    options?: IBasePetFilter
    config?: QueryConfig<typeof PetBreedsService.filter>
}
export const usePetBreeds = ({ options = {}, config = {} }: IProps) => {
    const KEY = `${PetBreedsService.NAME}${PetBreedsService.getById.name}`
    return useQuery({
        ...config,
        queryKey: [KEY, options],
        queryFn: () => PetBreedsService.filter(options),
    })
}
