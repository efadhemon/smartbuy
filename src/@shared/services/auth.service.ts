import { CoreAxiosInstance } from "@shared/config/axios/core.axios"
import { IFAuthLogin } from "./../interfaces/auth.interface"
const END_POINT = "/auth/"

export const AuthService = {
	login(payload: IFAuthLogin) {
		return CoreAxiosInstance.post(`${END_POINT}login/customer`, payload)
	},
	register(payload: IFAuthLogin) {
		return CoreAxiosInstance.post(`${END_POINT}register/customer`, payload)
	},
}
