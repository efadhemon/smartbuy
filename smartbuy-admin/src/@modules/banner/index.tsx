import BannersPage from "./routes/BannersPage"
import { Navigate } from "react-router-dom"

export const BannerRoutes = [
	{ path: "", element: <Navigate to="/banner/list"/> },
	{ path: "list", element: <BannersPage /> },
]
 