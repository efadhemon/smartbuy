import { Paths } from "@shared/enums";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import { UsersList } from "../components/UsersList";

export const UsersPage = () => {
    const navigate = useNavigate();
    return (
        <PageHeader
            onBack={() => navigate(-1)}
            title="Users List"
            extra={[
                <Button
                    onClick={() => navigate(Paths.UserCreate)}
                    type="primary"
                >
                    Create
                </Button>,
            ]}
        >
            <UsersList />
        </PageHeader>
    );
};
