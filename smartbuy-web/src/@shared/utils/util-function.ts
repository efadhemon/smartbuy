import { ENV } from "src/ENV"
import jwt_decode from "jwt-decode"

export const concatFilterQuery = (options: any): string => {
	let result: string[] = []
	if (options.searchTerm) {
		result.push(`searchTerm=${options.searchTerm}`)
	}
	if (options.page) {
		result.push(`page=${options.page}`)
	}
	if (options.take) {
		result.push(`take=${options.take}`)
	}
	if (options.between) {
		result.push(`between=${options.between}`)
	}
	if (options.before) {
		result.push(`before=${options.before}`)
	}
	if (options.between) {
		result.push(`between=${options.between}`)
	}
	if (options.after) {
		result.push(`after=${options.after}`)
	}
	if (options.fetchAll) {
		result.push(`fetchAll=${options.fetchAll}`)
	}
	if (options.single) {
		result.push(`single=${options.single}`)
	}
	if (options.relations) {
		result.push(`relations=${JSON.stringify(options.relations)}`)
	}
	if (options.selects) {
		result.push(`selects=${options.selects}`)
	}
	if (options.category) {
		result.push(`category=${options.category}`)
	}
	if (options.isActive) {
		result.push(`isActive=${options.isActive}`)
	}
	if (options.owner) {
		result.push(`owner=${options.owner}`)
	}
	return result.join("&")
}

export const storage = {
	getToken: (): string | false => {
		if (typeof window === "undefined") return false
		const token = localStorage.getItem(`${ENV.SESSION_PREFIX}token`)
		if (!token) {
			return false
		}

		return JSON.parse(token)
	},

	setToken: (token: string) => {
		if (typeof window === "undefined") return false
		localStorage.setItem(`${ENV.SESSION_PREFIX}token`, JSON.stringify(token))
	},

	clear: () => {
		localStorage.clear()
	},

	setData(data: any, key: string) {
		if (typeof window === "undefined") return false
		localStorage.setItem(key, JSON.stringify(data))
	},

	getDate(key: string) {
		if (typeof window === "undefined") return false
		var item = localStorage.getItem(key)
		if (!item) {
			return false
		}

		return JSON.parse(item)
	},

	removeData(key: string) {
		if (typeof window === "undefined") {
			return
		}
		localStorage.removeItem(key)
	},
}

export const getSession = (): unknown => {
	try {
		const token: string | boolean = storage.getToken()
		if (token) {
			return jwt_decode(token)
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}
