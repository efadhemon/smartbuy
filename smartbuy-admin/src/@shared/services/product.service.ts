import { CoreAxiosInstance } from "@shared/config"
import { IProductFilter, IProducts, IProductsFilter } from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"


const END_POINT: string = "/products/"

export const ProductService = {
	create(payload: IProducts) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IProductsFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterOne(options: IProductFilter) {	
		const {id} = options;
		delete options.id;	
		return CoreAxiosInstance.get(`${END_POINT}${id}?${concatFilterQuery(options)}`)
	},
	update(payload: IProducts) {
		const { id } = payload
		delete payload.id;
		return CoreAxiosInstance.put(`${END_POINT}${id}`, payload)
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
