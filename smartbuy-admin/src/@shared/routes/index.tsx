import { useAuth } from "@shared/hooks";
import ProtectedRoutes from "./protected-routes.component";
import PublicRoutes from "./public-routes.component";

const AppRoutes = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <ProtectedRoutes /> : <PublicRoutes />;
};

export default AppRoutes;
