import { CoreAxiosInstance } from "@shared/config"
import { IBannerFilter } from "@shared/interfaces"
import { concatFilterQuery } from "@shared/utils"

const END_POINT: string = "/banners/"

export const BannerService = {
	NAME: "banners",
	filter(options: IBannerFilter) {
		return CoreAxiosInstance.get(`${END_POINT}?${concatFilterQuery(options)}`)
	},
	getById(id: string) {
		return CoreAxiosInstance.get(`${END_POINT}${id}`)
	},
}
