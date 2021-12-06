import CreateUserPage from "./routes/CreateUserPage";
import UpdateUserPage from "./routes/UpdateUserPage";
import UsersPage from "./routes/UsersPage";

export const UsersRoutes = [
    { path: "", element: <UsersPage /> },
    { path: "create", element: <CreateUserPage /> },
    { path: "update/:id", element: <UpdateUserPage /> },
];
