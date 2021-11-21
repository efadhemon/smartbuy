import { CoreAxiosInstance } from "@shared/config"
import { IBaseFilter } from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/service-packages/"

export const ServicePackageService = {
	NAME: "services",
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
}
