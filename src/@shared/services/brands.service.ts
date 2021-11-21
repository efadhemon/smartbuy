import { CoreAxiosInstance } from "@shared/config"
import {
    IBaseFilter
} from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"


const END_POINT: string = "/brands/"

export const BrandService = {
	NAME: "brands",
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	getById(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
}
