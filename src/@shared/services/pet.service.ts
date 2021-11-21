import { CoreAxiosInstance } from "@shared/config"
import { IBasePetFilter, ICreatePetProfile, IUpdatePetProfile } from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/pets/"

export const PetService = {
	NAME: "Pets",
	filter(options: IBasePetFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	getById(id: string, options: IBasePetFilter) {
		return CoreAxiosInstance.get(`${END_POINT}${id}?${concatFilterQuery(options)}`)
	},
	create(payload: ICreatePetProfile) {
		
		
		return CoreAxiosInstance.post(END_POINT, payload)
	},
	update(payload: IUpdatePetProfile) {
		const { id } = payload;
		delete payload.id;
		
		return CoreAxiosInstance.put(`${END_POINT}${id}`, payload)
	},
	delete(id: string) {
		return CoreAxiosInstance.delete(`${END_POINT}${id}`)
	},
}
