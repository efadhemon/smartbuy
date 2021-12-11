import { AuthService } from "@shared/services/auth.service";
import { notification } from "antd";
import { storage } from "@shared/utils";
import { useMutation } from "react-query";

export const useAuth = () => {
    const loginFn = useMutation(AuthService.login, {
        onSuccess: (res) => {
            if (res) {
                storage.setToken(res.data);
                notification.success({ message: "Auth Login Success" });
                window.location.reload();
            }
        },
    });
    const logoutFn = () => {
        storage.clear();
        window.location.assign(window.location.origin as unknown as string);
    };

    const loadUserFn = () => {};

    return {
        loginFn,
        logoutFn,
        loadUserFn,
    };
};
