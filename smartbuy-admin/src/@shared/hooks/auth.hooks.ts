import { AuthService } from "@shared/services/auth.service";
import { notification } from "antd";
import { storage } from "@shared/utils";
import { useMutation } from "react-query";

export const useAuth = () => {
    const loginFn = useMutation(AuthService.login, {
        onSuccess: (res) => {
            if (res.data.success) {
                storage.setToken(res.data?.payload?.token);
                notification.success({ message: res.data?.message });
                window.location.reload();
            } else {
                notification.error({
                    message: res.data?.message || "Something is wrong",
                });
            }
        },
    });
    const logoutFn = () => {
        storage.clear();
        window.location.assign(window.location.origin as unknown as string);
    };

    return {
        loginFn,
        logoutFn,
    };
};
