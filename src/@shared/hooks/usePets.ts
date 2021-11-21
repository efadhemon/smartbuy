import { IBasePetFilter } from "@shared/interfaces";
import { PetService } from "@shared/services";
import { QueryConfig } from "@shared/config";
import { useQuery } from "react-query";

type IProps = {
	options?: IBasePetFilter;
	config?: QueryConfig<typeof PetService.filter>;
};
export const usePets = ({ options = {}, config = {} }: IProps) => {
	const KEY = `${PetService.NAME}${PetService.getById.name}`;
	return useQuery({
		...config,
		queryKey: [KEY, options],
		queryFn: () => PetService.filter(options),
	});
};
