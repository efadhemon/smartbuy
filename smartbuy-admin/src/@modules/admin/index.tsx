import { Paths } from "@shared/enums";
import { Navigate } from "react-router-dom";
import AdminCreatePage from "./routes/AdminCreatePage";
import AdminsPage from "./routes/AdminsPage";
import AdminUpdatePage from "./routes/AdminUpdatePage";

export const AdminRoutes = [
    { path: "", element: <Navigate to={Paths.AdminList} /> },
    { path: "list", element: <AdminsPage /> },
    { path: "create", element: <AdminCreatePage /> },
    { path: "update/:id", element: <AdminUpdatePage /> },
];
