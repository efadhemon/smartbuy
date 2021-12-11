import { Paths } from "@shared/enums";
import { Navigate } from "react-router-dom";
import CategoryCreatePage from "./routes/CategoryCreatePage";
import CategoryPage from "./routes/CategoryPage";
import CategoryUpdatePage from "./routes/CategoryUpdatePage";

export const CategoryRoutes = [
    { path: "", element: <Navigate to={Paths.CategoryList} /> },
    { path: "list", element: <CategoryPage /> },
    { path: "create", element: <CategoryCreatePage /> },
    { path: "update/:id", element: <CategoryUpdatePage /> },
];
