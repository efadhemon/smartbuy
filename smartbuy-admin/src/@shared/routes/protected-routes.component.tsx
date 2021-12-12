import { Outlet, useRoutes } from "react-router-dom";
import AppLayout from "@shared/components/layout/AppLayout";
import NotFound from "@shared/components/NotFound";
import { UserRoutes } from "@modules/user";
import { CategoryRoutes } from "@modules/category";
import { AdminRoutes } from "@modules/admin";
import { ProductRoutes } from "@modules/product";

const App = () => {
    return (
        <AppLayout>
            <Outlet />
        </AppLayout>
    );
};

const ProtectedRoutes = () => {
    const routes = [
        {
            path: "admin",
            children: AdminRoutes,
        },
        {
            path: "user",
            children: UserRoutes,
        },
        {
            path: "category",
            children: CategoryRoutes,
        },
        {
            path: "product",
            children: ProductRoutes,
        },
    ];

    return useRoutes([
        {
            path: "",
            element: <App />,
            children: routes,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);
};

export default ProtectedRoutes;
