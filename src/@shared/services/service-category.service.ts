import { CoreAxiosInstance } from "@shared/config"
import { IBaseServiceCategoryFilter } from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/serviceCategories/"

export const ServiceCategoryService = {
	NAME: "serviceCategories",
	filter(options: IBaseServiceCategoryFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	getById(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
}
