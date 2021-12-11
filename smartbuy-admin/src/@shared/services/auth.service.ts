import { baseService } from "@shared/base/base.service";
import { CoreAxiosInstance } from "@shared/config";
import { IAuthCredential } from "@shared/interfaces";

const END_POINT: string = "/auth/admin/login";

export const AuthService = {
    ...baseService(END_POINT),
    login: (payload: IAuthCredential) => {
        return CoreAxiosInstance.post(`${END_POINT}`, payload);
    },
};
// class AAuthService extends BaseService<{},{}> {
// 	END_POINT: string = "/auth"
// 	constructor() {
// 		super(this.END_POINT)
// 	}

// 	login(payload: IAuthCredential) {
//
// 		return CoreAxiosInstance.post(`${END_POINT}`, payload)
// 	}
// }

// export const _AAuthService = new AAuthService()
