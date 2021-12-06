import CategoryCreatePage from "./routes/CategoryCreatePage";
import CategoryPage from "./routes/CategoryPage";
import CategoryUpdatePage from "./routes/CategoryUpdatePage";

export const CategoryRoutes = [
    { path: "", element: <CategoryPage /> },
    { path: "create", element: <CategoryCreatePage /> },
    { path: "update/:id", element: <CategoryUpdatePage /> },
];
