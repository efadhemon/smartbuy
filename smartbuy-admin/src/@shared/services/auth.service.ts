import { CoreAxiosInstance } from "@shared/config";
import { IAuthCredential } from "@shared/interfaces";

const END_POINT: string = "/auth/login/admin";

export const AuthService = {
    login: (payload: IAuthCredential) => {
        return CoreAxiosInstance.post(`${END_POINT}`, payload);
    },
};
