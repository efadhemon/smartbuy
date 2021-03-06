import ProtectedRoutes from "./protected-routes.component";
import PublicRoutes from "./public-routes.component";
import { storage } from "@shared/utils";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { ENV } from "@shared/config";
import { useEffect, useState } from "react";

const AppRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authToken = storage.getToken();

    useEffect(() => {
        if (authToken) {
            const admin: any = jwtDecode(authToken);
            if (admin.id) {
                axios
                    .get(`${ENV.CORE_END_POINT}admin/${admin.id}`)
                    .then((res) => {
                        setIsAuthenticated(res.data.success);
                    });
            }
        }
    }, [authToken]);

    return isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />;
};

export default AppRoutes;
