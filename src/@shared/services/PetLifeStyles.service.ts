import { CoreAxiosInstance } from "@shared/config"
import {
	IBaseFilter
} from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"


const END_POINT: string = "/petLifeStyles/"

export const PetLifeStylesService = {
	NAME: "petLifeStyles",
	filter(options: IBaseFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	getById(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},

}
