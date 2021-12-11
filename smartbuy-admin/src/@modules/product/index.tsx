import { Paths } from "@shared/enums";
import { Navigate } from "react-router-dom";
import ProductCreatePage from "./routes/ProductCreatePage";
import ProductListPage from "./routes/ProductListPage";
import ProductUpdatePage from "./routes/ProductUpdatePage";

export const ProductRoutes = [
    { path: "", element: <Navigate to={Paths.ProductList} /> },
    { path: "list", element: <ProductListPage /> },
    { path: "create", element: <ProductCreatePage /> },
    { path: "update/:id", element: <ProductUpdatePage /> },
];
