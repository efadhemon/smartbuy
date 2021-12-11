import { Authorization } from "@modules/auth";
import { Paths } from "@shared/enums";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import { AdminList } from "../components/AdminList";

const AdminsPage = () => {
    const navigate = useNavigate();
    return (
        <Authorization allowedAccess={["AdminView"]}>
            <PageHeader
                onBack={() => navigate(-1)}
                title="Admin List"
                extra={[
                    <Button
                        onClick={() => navigate(Paths.AdminCreate)}
                        type="primary"
                    >
                        Create
                    </Button>,
                ]}
            />
            <AdminList />
        </Authorization>
    );
};

export default AdminsPage;
