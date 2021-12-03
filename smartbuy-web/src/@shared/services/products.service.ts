import { CoreAxiosInstance } from "@shared/config"
import {
    IBaseFilter
} from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"


const END_POINT: string = "/products/"

export const ProductsService = {
	NAME: "products",
	filter(options: IBaseFilter) {	
		console.log(options);
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	getById(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
}
