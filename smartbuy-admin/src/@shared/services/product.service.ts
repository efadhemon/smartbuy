import { CoreAxiosInstance } from "@shared/config"
import { IBaseFilter, ICreateProduct, IUpdateProduct } from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"


const END_POINT: string = "/product/"

export const ProductService = {
	NAME: END_POINT,
	create(payload: ICreateProduct) {
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	filterById(id: string) {		
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
	update(payload: IUpdateProduct) {
		const { id } = payload
		delete payload.id;
		return CoreAxiosInstance.put(`${END_POINT}${id}`, payload)
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
