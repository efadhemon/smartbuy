import { Outlet, useRoutes } from "react-router-dom";
import { DashboardRoutes } from "@modules/dashboard";
import DefaultDashboardPage from "@modules/dashboard/routes/default-dashboard-page-component";
import MainLayout from "@shared/components/layout/main-layout.component";
import NotFound from "@shared/components/NotFound";
import { UserRoutes } from "@modules/user";
import { CategoryRoutes } from "@modules/category";
import { AdminRoutes } from "@modules/admin";
import { ProductRoutes } from "@modules/product";

const App = () => {
    let pathName = window.location.pathname;
    return (
        <MainLayout>
            {pathName === "/" ? <DefaultDashboardPage /> : ""}
            <Outlet />
        </MainLayout>
    );
};

const ProtectedRoutes = () => {
    const routes = [
        {
            path: "dashboard",
            children: DashboardRoutes,
        },
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
