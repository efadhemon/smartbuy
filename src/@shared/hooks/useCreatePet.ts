import { QueryConfig } from "@shared/config";
import { PetService } from "@shared/services";
import { useMutation } from "react-query";

type IProps = {
	config?: QueryConfig<typeof PetService.create>
}

export const useCreatePet = ({ config={} }: IProps = {}) => {
	return useMutation({
		...config,
		mutationFn: PetService.create,
	})
}