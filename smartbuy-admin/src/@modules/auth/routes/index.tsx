import Login from "./login.component";
import { Navigate } from "react-router-dom";

export const AuthRoutes = [
    {
        path: "",
        element: <Navigate to="/auth/login" />,
    },
    {
        path: "login",
        element: <Login />,
    },
];
