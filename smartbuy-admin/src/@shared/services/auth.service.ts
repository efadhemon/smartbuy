import { CoreAxiosInstance } from "@shared/config";
import { IAuthCredential } from "@shared/interfaces";

const END_POINT: string = "/auth/admin/login";

export const AuthService = {
    login: (payload: IAuthCredential) => {
        return CoreAxiosInstance.post(`${END_POINT}`, payload);
    },
};
