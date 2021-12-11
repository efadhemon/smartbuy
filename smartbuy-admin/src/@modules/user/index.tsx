import { Paths } from "@shared/enums";
import { Navigate } from "react-router-dom";
import { CreateUserPage } from "./routes/CreateUserPage";
import { UpdateUserPage } from "./routes/UpdateUserPage";
import { UsersPage } from "./routes/UsersPage";

export const UserRoutes = [
    { path: "", element: <Navigate to={Paths.UserList} /> },
    { path: "list", element: <UsersPage /> },
    { path: "create", element: <CreateUserPage /> },
    { path: "update/:id", element: <UpdateUserPage /> },
];
