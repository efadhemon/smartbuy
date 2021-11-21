import { IBasePetFilter, ICreateAppointment } from "@shared/interfaces"

import { CoreAxiosInstance } from "@shared/config"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/appointments/"

export const AppointmentService = {
	NAME: "appointments",
	filter(options: IBasePetFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	getById(id: string, options: IBasePetFilter) {
		return CoreAxiosInstance.get(`${END_POINT}${id}?${concatFilterQuery(options)}`)
	},
    create(payload: ICreateAppointment) {
		return CoreAxiosInstance.post(`${END_POINT}`, payload)
	},
}
