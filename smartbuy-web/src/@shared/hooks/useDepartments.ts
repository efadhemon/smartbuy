import { DepartmentService } from "@shared/services";
import { IBaseFilter } from "@shared/interfaces";
import { QueryConfig } from "@shared/config";
import { useQuery } from 'react-query';

type DepartmentsType = {
	options: IBaseFilter
	config?: QueryConfig<typeof DepartmentService.filter>
}

export const useDepartments = ({ options, config }: DepartmentsType) => {
	const KEY = `${DepartmentService.NAME}${DepartmentService.getById.name}`
	return useQuery({
		...config,
		queryKey: [KEY, options],
		queryFn: () => DepartmentService.filter(options),
	})
}