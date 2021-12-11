import ProtectedRoutes from "./protected-routes.component";
import PublicRoutes from "./public-routes.component";
import { storage } from "@shared/utils";

const AppRoutes = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authToken = storage.getToken();

    // if (authToken) {
    //     const admin: any = jwt_decode(authToken);
    //     if (admin.id) {
    //         axios
    //             .get(`${ENV.CORE_END_POINT}admin/${admin.id}`)
    //             .then((res) => {
    //                 setIsAuthenticated(res?.data?.success);
    //             })
    //             .catch((error) => {
    //                 setIsAuthenticated(false);
    //             });
    //     }
    // }

    return authToken ? <ProtectedRoutes /> : <PublicRoutes />;
};

export default AppRoutes;
